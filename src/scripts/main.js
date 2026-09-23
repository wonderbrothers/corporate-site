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
 * 固定ナビゲーション（トップページ）
 * HERO（イラスト）が画面に見えている間は隠し、過ぎたら上から出す。
 * JS 無効時・IntersectionObserver 非対応時は常に表示（CSS 側の既定）。
 */
(function () {
  var nav = document.querySelector('[data-nav]');
  if (!nav) return;
  var hero = document.querySelector('[data-hero]');
  if (!hero || !('IntersectionObserver' in window)) {
    nav.classList.add('is-shown');
    return;
  }
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      nav.classList.toggle('is-shown', !entry.isIntersecting);
    });
  }, { threshold: 0 }).observe(hero);
})();

// お問い合わせフォームの送信は contact ページ内のスクリプト
// （reCAPTCHA v3 → Cloudflare Worker 経由）で処理する。

/*
 * WONDER LAB プロダクトカルーセル
 *
 * 方針（段階的強調）:
 *   - JS が無いときは窓が overflow-x:auto なので、横スクロールで全カードに到達できる。
 *   - JS があるときは窓の overflow を切り、トラックを transform で送る。
 *
 * なぜスクロールではなく transform か:
 *   overflow-x:auto は CSS 仕様上 overflow-y も auto にしてしまう。カードは画面より
 *   背が高く、読んでいる間カーソルは常にカルーセルの上にあるため、トラックパッドの
 *   斜め方向の慣性が横スクロールに吸われ、ページを縦に送りにくくなる。
 *   transform ならスクロールコンテナが存在しないので、縦の操作を一切横取りしない。
 *   カルーセルは 1140px 超（マウス/トラックパッド環境）でしか出ないため、
 *   ネイティブのスワイプ慣性を失う不利益もない。
 */
(function () {
  var viewport = document.querySelector('[data-carousel-viewport]');
  var track = document.querySelector('[data-carousel-track]');
  var nav = document.querySelector('[data-carousel-nav]');
  var dotsBox = document.querySelector('[data-carousel-dots]');
  var prev = document.querySelector('[data-carousel-prev]');
  var next = document.querySelector('[data-carousel-next]');
  if (!viewport || !track || !nav || !dotsBox || !prev || !next) return;
  if (track.children.length < 2) return;

  var offset = 0;
  var dots = [];

  function stacked() {
    return getComputedStyle(track).flexDirection === 'column';
  }

  function maxOffset() {
    return Math.max(0, track.scrollWidth - viewport.clientWidth);
  }

  // カード1枚ぶんの送り幅（カード幅 + gap）
  function step() {
    var cards = track.children;
    var w = cards[0].getBoundingClientRect().width;
    if (cards.length < 2) return w;
    return cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
  }

  // 送れるページ数（可動域 ÷ 窓幅）。枚数とは一致しないことがある。
  function pageCount() {
    if (viewport.clientWidth <= 0) return 1;
    return Math.ceil(maxOffset() / viewport.clientWidth) + 1;
  }

  function apply() {
    var max = maxOffset();
    if (offset > max) offset = max;
    if (offset < 0) offset = 0;
    track.style.transform = stacked() ? '' : 'translateX(' + -offset + 'px)';
    sync();
  }

  function buildDots() {
    var want = pageCount();
    if (want === dots.length) return;
    dotsBox.innerHTML = '';
    dots = [];
    for (var i = 0; i < want; i++) {
      (function (index) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'wb-box wb-wonderlab__carousel-dot';
        dot.setAttribute('aria-label', index + 1 + 'ページ目へ');
        dot.addEventListener('click', function () {
          var ratio = dots.length > 1 ? index / (dots.length - 1) : 0;
          offset = ratio * maxOffset();
          apply();
        });
        dotsBox.appendChild(dot);
        dots.push(dot);
      })(i);
    }
  }

  function sync() {
    buildDots();
    var max = maxOffset();
    var progress = max > 0 ? offset / max : 0;
    var index = dots.length > 1 ? Math.round(progress * (dots.length - 1)) : 0;
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('is-current', i === index);
      dots[i].setAttribute('aria-current', i === index ? 'true' : 'false');
    }
    prev.disabled = offset <= 1;
    next.disabled = offset >= max - 1;
  }

  prev.addEventListener('click', function () {
    offset -= step();
    apply();
  });
  next.addEventListener('click', function () {
    offset += step();
    apply();
  });

  // キーボードで隠れたカードに入ったら、その位置まで送る
  track.addEventListener('focusin', function (e) {
    if (stacked()) return;
    var card = e.target.closest('.wb-wonderlab__product');
    if (!card) return;
    var left = card.getBoundingClientRect().left - track.getBoundingClientRect().left;
    var right = left + card.getBoundingClientRect().width;
    if (left < offset) offset = left;
    else if (right > offset + viewport.clientWidth) offset = right - viewport.clientWidth;
    else return;
    apply();
  });

  // 窓がブラウザ都合で横に動いてしまったら戻す（transform と二重にずれないように）
  viewport.addEventListener('scroll', function () {
    if (!stacked() && viewport.scrollLeft !== 0) viewport.scrollLeft = 0;
  });

  window.addEventListener('resize', function () {
    if (stacked()) {
      offset = 0;
      track.style.transform = '';
      sync();
    } else {
      apply();
    }
  });

  apply();
})();
