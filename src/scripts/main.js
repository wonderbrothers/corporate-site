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
 * ページを開いた直後（HERO だけが見えている状態）は隠し、少しでもスクロールしたら上から出す。
 * 以前は HERO を通り過ぎるまで出さなかったが、それだと言語切り替えやメニューに気づけないため。
 * JS 無効時は常に表示（CSS 側の既定）。
 */
(function () {
  var nav = document.querySelector('[data-nav]');
  if (!nav) return;
  var SHOW_AFTER = 100; // px。この量だけスクロールしたら出す
  var ticking = false;
  function update() {
    ticking = false;
    nav.classList.toggle('is-shown', window.scrollY > SHOW_AFTER);
  }
  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
})();

/*
 * メニュードロワー（840px 以下）
 * メニューボタンで開き、バツ・背景・Esc・リンク選択で閉じる。
 * 開いている間は背面のスクロールを止め、Tab のフォーカスをドロワー内に留める。
 */
(function () {
  var drawer = document.querySelector('[data-drawer]');
  var openBtn = document.querySelector('[data-drawer-open]');
  if (!drawer || !openBtn) return;
  var panel = drawer.querySelector('.wb-drawer__panel');
  var root = document.documentElement;

  function focusables() {
    return panel.querySelectorAll('a[href], button:not([disabled])');
  }
  function open() {
    drawer.classList.add('is-open');
    root.classList.add('wb-drawer-open');
    openBtn.setAttribute('aria-expanded', 'true');
    // visibility が切り替わった後でないとフォーカスできないため、次のフレームで移す
    var closeBtn = drawer.querySelector('.wb-drawer__close');
    requestAnimationFrame(function () {
      if (closeBtn) closeBtn.focus();
    });
  }
  function close(restoreFocus) {
    if (!drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    root.classList.remove('wb-drawer-open');
    openBtn.setAttribute('aria-expanded', 'false');
    if (restoreFocus) openBtn.focus();
  }

  openBtn.addEventListener('click', open);
  drawer.querySelectorAll('[data-drawer-close]').forEach(function (el) {
    el.addEventListener('click', function () { close(true); });
  });
  // リンクを押したら閉じる（ページ内リンクのスクロールはそのまま進む）
  drawer.querySelectorAll('[data-drawer-link]').forEach(function (el) {
    el.addEventListener('click', function () { close(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (!drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      close(true);
      return;
    }
    if (e.key === 'Tab') {
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  // PC 幅に広げたら閉じる
  window.addEventListener('resize', function () {
    if (window.innerWidth > 840) close(false);
  });
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
 *   1140px 以下は CSS 側でネイティブの横スクロール（scroll-snap）にしており、
 *   この JS は何もしない（stacked() が true を返す）。
 */
// WONDER LAB と SELECTED WORK の2か所で使う（[data-carousel] ごとに独立して動く）
Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), function (root) {
  var viewport = root.querySelector('[data-carousel-viewport]');
  var track = root.querySelector('[data-carousel-track]');
  var nav = root.querySelector('[data-carousel-nav]');
  var dotsBox = root.querySelector('[data-carousel-dots]');
  var prev = root.querySelector('[data-carousel-prev]');
  var next = root.querySelector('[data-carousel-next]');
  if (!viewport || !track || !nav || !dotsBox || !prev || !next) return;
  if (track.children.length < 2) return;

  var offset = 0;
  var dots = [];

  // transform で送らない状態：縦積みか、ネイティブ横スクロール（1140px 以下）
  function stacked() {
    return getComputedStyle(track).flexDirection === 'column' ||
      getComputedStyle(viewport).overflowX === 'auto';
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
        dot.setAttribute('aria-label', /^en/.test(document.documentElement.lang) ? 'Go to page ' + (index + 1) : index + 1 + 'ページ目へ');
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
    var card = e.target.closest('[data-carousel-track] > *');
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
});
