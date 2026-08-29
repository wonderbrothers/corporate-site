/**
 * Cloudflare Worker: reCAPTCHA v3 検証 + Google フォーム転送プロキシ
 *
 * フロント（contact ページ）から
 *   POST { token, fields: { "entry.xxx": "値", ... } }
 * を受け取り、
 *   1. reCAPTCHA v3 トークンを Google に検証（secret を使用）
 *   2. success かつ score>=閾値 かつ action=="contact" なら
 *   3. Google フォームの formResponse へ転送
 * する。ブラウザ↔Worker は CORS、Worker↔Google はサーバー間なので CORS 問題なし。
 *
 * 【デプロイ手順（Cloudflare ダッシュボード）】
 *   1. Workers & Pages → Create → Worker を作成（名前は任意, 例 wb-contact）
 *   2. このファイルの内容を貼り付けて Deploy
 *   3. Settings → Variables and Secrets → 以下の2つを登録（必須）
 *        - Secret: RECAPTCHA_SECRET = reCAPTCHA v3 のシークレットキー
 *        - Secret: GOOGLE_FORM      = 送信先 Google フォームの formResponse URL
 *                                     例) https://docs.google.com/forms/d/e/<FORM_ID>/formResponse
 *   4. 発行された https://<name>.<account>.workers.dev を
 *      contact.astro の CONTACT_ENDPOINT に設定
 *
 * ※ 送信先フォームURLは公開リポジトリに含めない（第三者による直接POST=スパム対策）。
 *    値は必ず Cloudflare 側の Secret として登録すること。
 */

// v3 スコア閾値（0.0〜1.0、低いほど緩い）。誤ブロックが出るなら下げる。
const SCORE_THRESHOLD = 0.5;

// 許可オリジン（本番 + ローカル確認用）
const ALLOWED_ORIGINS = [
  "https://wonder-bros.com",
  "https://www.wonder-bros.com",
  "http://localhost:4321",
  "http://localhost:3000",
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...cors },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405, cors);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, error: "bad_request" }, 400, cors);
    }
    const token = body && body.token;
    const fields = (body && body.fields) || {};
    if (!token) return json({ ok: false, error: "no_token" }, 400, cors);

    // 1) reCAPTCHA 検証
    let verify;
    try {
      const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: env.RECAPTCHA_SECRET, response: token }),
      });
      verify = await res.json();
    } catch {
      return json({ ok: false, error: "verify_unreachable" }, 502, cors);
    }

    const scoreOk = typeof verify.score !== "number" || verify.score >= SCORE_THRESHOLD;
    const actionOk = !verify.action || verify.action === "contact";
    if (!verify.success || !scoreOk || !actionOk) {
      return json({ ok: false, error: "recaptcha_failed", score: verify.score }, 403, cors);
    }

    // 2) Google フォームへ転送（entry.* のみ）
    // 送信先URLは Cloudflare の Secret から取得（コードには埋め込まない）
    const googleForm = env.GOOGLE_FORM;
    if (!googleForm) {
      return json({ ok: false, error: "form_not_configured" }, 500, cors);
    }

    const form = new URLSearchParams();
    for (const [k, v] of Object.entries(fields)) {
      if (k.indexOf("entry.") === 0) form.append(k, String(v));
    }
    try {
      await fetch(googleForm, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form,
      });
    } catch {
      return json({ ok: false, error: "forward_failed" }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
};
