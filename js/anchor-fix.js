// Fix for in-page hash links when ajax-loading is enabled.
// Intercepts clicks on links with href starting with '#' and performs
// an in-page smooth scroll, preventing the global AJAX link handler from running.
// Uses CSS scroll-margin-top for offset (defined in style.css).
(function () {
  function onHashLinkClick(e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;

    // Prevent default and stop other click handlers (including ajax loader)
    e.preventDefault();
    e.stopImmediatePropagation && e.stopImmediatePropagation();

    var id = href.slice(1);
    var target = id ? document.getElementById(id) : document.documentElement;
    if (!target) target = document.querySelector(href);
    if (!target) {
      // Fallback: update location hash
      try { history.replaceState(null, '', href); } catch (err) {}
      return;
    }

    try { history.replaceState(null, '', href); } catch (err) {}
    target.scrollIntoView({ behavior: 'smooth' });
  }

  document.addEventListener('click', onHashLinkClick, true);
})();
