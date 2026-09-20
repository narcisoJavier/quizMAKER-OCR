// Application State & Theme Controller
(function () {
  const THEME_KEY = 'slu_nlp_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleBtn(theme);
  }

  function updateThemeToggleBtn(theme) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    if (theme === 'dark') {
      btn.innerHTML = '<span>☀️</span> Light';
    } else {
      btn.innerHTML = '<span>🌙</span> Dark';
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', toggleTheme);
    }
  });

  // Global Helpers
  window.App = {
    setTheme,
    toggleTheme,
    searchGoogle: function (query) {
      const url = `https://www.google.com/search?q=${encodeURIComponent('NLP CSE ' + query)}`;
      window.open(url, '_blank');
    }
  };
})();
