/*
 * スクロールリビール
 * 旧 Studio.Design ランタイムが行っていた「表示時フェードイン」を、
 * 依存なしの軽量な IntersectionObserver で再現する。
 *
 * 方針（段階的強調 / progressive enhancement）:
 *   - HTML は既定で全要素が見える状態で保存してある（JS 無効でも崩れない）
 *   - このスクリプトが動くときだけ <html> に .js-on を付け、
 *     .reveal 要素をいったん隠して（CSS 側）、ビューポート進入時に表示する
 */
(function () {
  var root = document.documentElement;
  root.classList.add('js-on');

  var targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // IntersectionObserver 非対応環境ではそのまま全表示
  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < targets.length; i++) targets[i].classList.add('is-visible');
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    // 負の下マージンは付けない。付けると最下部（フッター等）の要素が
    // 発火ラインまでスクロールできず、永久に opacity:0 のまま残ってしまう。
    // ビューポートに少しでも入った時点で表示する。
    rootMargin: '0px',
    threshold: 0
  });

  targets.forEach(function (el) { io.observe(el); });
})();

/*
 * お問い合わせフォーム → Google フォーム送信
 *   - フォームは隠し iframe（target）へ POST するので画面遷移しない
 *   - 必須チェックはブラウザ標準（required 属性）に任せる
 *   - 送信が iframe に届いたら（load）フォームを隠してお礼を表示する
 */
(function () {
  var form = document.querySelector('form[name="contact form"]');
  if (!form) return;
  var frame = document.querySelector('iframe[name="gform-target"]');
  var thanks = document.querySelector('.form-thanks');
  var submitted = false;

  // required 検証を通過して実際に送信されたときだけ submit イベントが発火する
  form.addEventListener('submit', function () { submitted = true; });

  if (frame) {
    frame.addEventListener('load', function () {
      if (!submitted) return; // 初回の空ロードは無視
      form.style.display = 'none';
      if (thanks) thanks.hidden = false;
      thanks && thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
})();
