// Application State & Theme Controller
(function () {
  const THEME_KEY = 'slu_nlp_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const theme = savedTheme || 'dark';
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

  // Global Deep Dive Accordion Toggle
  window.toggleDeepDive = function (contentId, btn) {
    const el = document.getElementById(contentId);
    if (!el) {
      console.warn('Deep dive target element not found:', contentId);
      return;
    }
    const isOpen = el.classList.toggle('open');

    // Update button styling and arrow
    let targetBtn = btn;
    if (!targetBtn && window.event && window.event.currentTarget) {
      targetBtn = window.event.currentTarget;
    }
    if (targetBtn) {
      targetBtn.classList.toggle('active', isOpen);
      const arrow = targetBtn.querySelector('.toggle-arrow') || targetBtn.querySelector('span:last-child');
      if (arrow && (arrow.textContent.includes('▼') || arrow.textContent.includes('▲'))) {
        arrow.textContent = isOpen ? '▲' : '▼';
      }
    } else {
      const toggleBtns = document.querySelectorAll(`button[onclick*="${contentId}"]`);
      toggleBtns.forEach(b => {
        b.classList.toggle('active', isOpen);
        const arrow = b.querySelector('.toggle-arrow') || b.querySelector('span:last-child');
        if (arrow && (arrow.textContent.includes('▼') || arrow.textContent.includes('▲'))) {
          arrow.textContent = isOpen ? '▲' : '▼';
        }
      });
    }
  };

  // Global Helpers
  window.App = {
    setTheme,
    toggleTheme,
    toggleDeepDive: window.toggleDeepDive,
    searchGoogle: function (query) {
      const url = `https://www.google.com/search?q=${encodeURIComponent('NLP CSE ' + query)}`;
      window.open(url, '_blank');
    }
  };
})();
