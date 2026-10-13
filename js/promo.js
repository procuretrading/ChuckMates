(function () {
  // Coupon code shown after a visitor clicks through an attribution link.
  var CODE = 'SKOGSPOOKY15';
  // Attribution link used when the visitor arrived from the homepage popup (?src=popup).
  // Direct visitors (Instagram, shared link) use the link in treat.html.
  var POPUP_LINK = 'https://www.amazon.com/stores/SK%C3%96GTOOLS/page/F2A0A9CD-372D-418D-945C-67F42AFB3B81?maas=maas_adg_B0ED18150337CA48F3D8FE390DAEA16C_afap_abs&ref_=aa_maas&tag=maas';
  var SEEN_KEY = 'skogTreatSeen';

  function copy(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text).catch(function () {});
      }
    } catch (e) {}
    return Promise.resolve();
  }

  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params || {});
  }

  function reveal(box) {
    box.innerHTML = '<div class="treat-code"></div><p class="treat-note">Copied. Paste it at Amazon checkout. 15% off SKÖG TOOLS products through October 31.</p>';
    box.querySelector('.treat-code').textContent = CODE;
    box.classList.add('shown');
    copy(CODE);
  }

  // Dedicated page: one reveal button.
  var unwrap = document.getElementById('treat-unwrap');
  if (unwrap) {
    var fromPopup = /[?&]src=popup(&|$)/.test(location.search);
    if (fromPopup) unwrap.href = POPUP_LINK;
    unwrap.addEventListener('click', function () {
      reveal(unwrap.parentNode.querySelector('.treat-reveal'));
      unwrap.textContent = 'Open Amazon again';
      track('treat_unwrap', { product: unwrap.getAttribute('data-product'), source: fromPopup ? 'popup' : 'direct' });
    });
  }

  // Homepage only: one-time popup per browser session.
  if (!document.getElementById('home-hero')) return;
  try { if (sessionStorage.getItem(SEEN_KEY)) return; } catch (e) {}

  // The homepage has no promo stylesheet of its own; load it with the popup.
  var css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'css/promo.css';
  css.addEventListener('load', init);
  document.head.appendChild(css);

  function init() {
    var popup = document.createElement('div');
    popup.className = 'treat-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-label', 'Trick or Treat offer');
    popup.innerHTML =
      '<div class="treat-popup-card">' +
        '<button type="button" class="treat-popup-close" aria-label="Close">&times;</button>' +
        '<img src="images/treat-hero.jpg" alt="SKÖG Tools Trick or Treat" width="2000" height="1116">' +
        '<div class="treat-popup-body">' +
          '<p>You rang our doorbell, so here\'s a treat: 15% off the whole SKÖG catalog.</p>' +
          '<a class="btn" href="treat.html?src=popup">See your treat</a>' +
          '<button type="button" class="treat-popup-dismiss">No thanks</button>' +
        '</div>' +
      '</div>';
    var link = popup.querySelector('.btn');
    document.body.appendChild(popup);

    var lastFocus = null;
    function close() {
      popup.classList.remove('open');
      document.removeEventListener('keydown', onKey);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    function open() {
      lastFocus = document.activeElement;
      popup.classList.add('open');
      document.addEventListener('keydown', onKey);
      link.focus();
      try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (e) {}
    }

    popup.querySelector('.treat-popup-close').addEventListener('click', close);
    popup.querySelector('.treat-popup-dismiss').addEventListener('click', close);
    popup.addEventListener('click', function (e) { if (e.target === popup) close(); });
    link.addEventListener('click', function () { track('treat_popup_click'); });

    setTimeout(open, 2000);
  }
})();
