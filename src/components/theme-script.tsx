// Inline, blocking script to set the theme before paint (avoids FOUC).
// Defaults to dark per product decision; respects a saved user preference.
// Loaded via next/script strategy="beforeInteractive" in the root layout.
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;
