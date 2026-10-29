/**
 * CueAI site chrome: theme (dark default) + early apply to avoid FOUC.
 * Language is static links between / and /en/.
 */
(function () {
  var KEY = "cueai-theme";

  function preferred() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return "dark";
  }

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      var next = theme === "light" ? "dark" : "light";
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      btn.setAttribute("title", theme === "light" ? "Dark" : "Light");
      btn.setAttribute("data-theme-next", next);
      var label = btn.querySelector("[data-theme-label]");
      if (label) label.textContent = theme === "light" ? "🌙" : "☀️";
    }
  }

  function init() {
    apply(preferred());
    var btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") || "dark";
      var next = cur === "light" ? "dark" : "light";
      try {
        localStorage.setItem(KEY, next);
      } catch (e) {}
      apply(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
