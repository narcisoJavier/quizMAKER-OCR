// Quiz Runtime Engine - Implements architecture from diagram.png
(function () {
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let selectedCategory = 'all';
  let missedQuestions = [];
  let answeredInCurrent = false;

  const PROGRESS_STORAGE_KEY = 'slu_nlp_quiz_progress';

  function initQuiz() {
    const questionsPool = (typeof QUIZ_QUESTIONS !== 'undefined') ? QUIZ_QUESTIONS : [];
    if (!questionsPool.length) {
      console.warn('Questions pool is empty. Please check data.js');
      return;
    }

    bindCategoryButtons();
    loadCategory('all');

    const nextBtn = document.getElementById('next-question-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', nextQuestion);
    }

    const retryBtn = document.getElementById('retry-missed-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', retryMissedQuestions);
    }

    const restartBtn = document.getElementById('restart-quiz-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => loadCategory(selectedCategory));
    }
  }

  function bindCategoryButtons() {
    const categoryBtns = document.querySelectorAll('.category-filter-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        loadCategory(cat);
      });
    });
  }

  function loadCategory(cat) {
    selectedCategory = cat;
    const pool = (typeof QUIZ_QUESTIONS !== 'undefined') ? QUIZ_QUESTIONS : [];
    if (cat === 'all') {
      questions = [...pool];
    } else {
      questions = pool.filter(q => q.category === cat);
    }

    // Shuffle questions for varied practice
    shuffleArray(questions);

    currentIndex = 0;
    score = 0;
    missedQuestions = [];
    answeredInCurrent = false;

    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('quiz-results-view').style.display = 'none';

    renderCurrentQuestion();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  function renderCurrentQuestion() {
    if (!questions.length) return;

    if (currentIndex >= questions.length) {
      showResults();
      return;
    }

    answeredInCurrent = false;
    const q = questions[currentIndex];

    // Update Meta & Progress
    const catLabel = q.category === 'domain1' ? 'Domain 1: NLP Concepts & Morphology'
      : q.category === 'domain2' ? 'Domain 2: Class Research Studies'
      : q.category === 'domain3' ? 'Domain 3: Bag of Words & Naive Bayes'
      : q.category === 'domain4' ? 'Domain 4: Applied NLP: quizMAKER-OCR'
      : 'Domain Review';

    document.getElementById('quiz-category-tag').textContent = catLabel;
    document.getElementById('quiz-question-counter').textContent = `Question ${currentIndex + 1} of ${questions.length}`;
    document.getElementById('quiz-score-live').textContent = `Score: ${score}`;

    const progressPct = ((currentIndex) / questions.length) * 100;
    document.getElementById('quiz-progress-bar').style.width = `${progressPct}%`;

    // Render Question Text
    document.getElementById('quiz-question-text').textContent = q.question;

    // Render Options
    const optionsContainer = document.getElementById('quiz-options-list');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span class="option-text">${escapeHtml(opt)}</span>
      `;
      btn.addEventListener('click', () => handleAnswerSelect(idx, btn));
      optionsContainer.appendChild(btn);
    });

    // Hide Feedback Box and Next Button
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'none';
    document.getElementById('next-question-btn').style.display = 'none';
  }

  function handleAnswerSelect(selectedIndex, clickedBtn) {
    if (answeredInCurrent) return;
    answeredInCurrent = true;

    const q = questions[currentIndex];
    const isCorrect = (selectedIndex === q.answer);
    const optionsBtns = document.querySelectorAll('.option-btn');

    // Disable all options and show colors
    optionsBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    if (isCorrect) {
      score++;
    } else {
      missedQuestions.push(q);
    }

    // Save progress to LocalStorage
    saveProgress();

    // Show Feedback (as modeled in architecture diagram)
    renderFeedback(isCorrect, q);
  }

  function renderFeedback(isCorrect, q) {
    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.style.display = 'block';

    const statusEl = document.getElementById('feedback-status-text');
    if (isCorrect) {
      statusEl.className = 'feedback-status status-correct';
      statusEl.innerHTML = '<span>✅ Correct!</span>';
    } else {
      statusEl.className = 'feedback-status status-incorrect';
      statusEl.innerHTML = `<span>❌ Incorrect. Correct Answer: ${escapeHtml(q.options[q.answer])}</span>`;
    }

    document.getElementById('feedback-simple-text').textContent = q.simpleExplanation;

    const deepDiveContent = document.getElementById('feedback-deep-dive-text');
    deepDiveContent.innerHTML = q.deepDive;
    deepDiveContent.classList.remove('open');

    // Google Search Shortcut (From diagram.png)
    const googleSearchBtn = document.getElementById('feedback-google-search-btn');
    if (googleSearchBtn) {
      googleSearchBtn.onclick = () => {
        const query = q.googleQuery || q.question;
        window.open(`https://www.google.com/search?q=${encodeURIComponent('NLP CSE ' + query)}`, '_blank');
      };
    }

    const nextBtn = document.getElementById('next-question-btn');
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = (currentIndex === questions.length - 1) ? 'View Final Results 🏁' : 'Next Question ➡️';
  }

  function nextQuestion() {
    currentIndex++;
    renderCurrentQuestion();
  }

  function showResults() {
    document.getElementById('quiz-view').style.display = 'none';
    const resultsView = document.getElementById('quiz-results-view');
    resultsView.style.display = 'block';

    const total = questions.length;
    const pct = Math.round((score / total) * 100);

    document.getElementById('results-score-percent').textContent = `${pct}%`;
    document.getElementById('results-score-counts').textContent = `${score} / ${total} Correct`;

    const retryBtn = document.getElementById('retry-missed-btn');
    if (missedQuestions.length > 0) {
      retryBtn.style.display = 'inline-flex';
      retryBtn.textContent = `🔄 Retry Missed Questions (${missedQuestions.length})`;
    } else {
      retryBtn.style.display = 'none';
    }

    // Persist highest score
    const bestKey = `slu_nlp_best_score_${selectedCategory}`;
    const prevBest = parseInt(localStorage.getItem(bestKey) || '0', 10);
    if (pct > prevBest) {
      localStorage.setItem(bestKey, pct);
    }
  }

  function retryMissedQuestions() {
    if (!missedQuestions.length) return;
    questions = [...missedQuestions];
    shuffleArray(questions);
    currentIndex = 0;
    score = 0;
    missedQuestions = [];
    answeredInCurrent = false;

    document.getElementById('quiz-view').style.display = 'block';
    document.getElementById('quiz-results-view').style.display = 'none';

    renderCurrentQuestion();
  }

  function saveProgress() {
    try {
      const data = {
        category: selectedCategory,
        currentIndex,
        score,
        date: new Date().toISOString()
      };
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('LocalStorage write error', e);
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  window.toggleDeepDive = function (contentId) {
    const el = document.getElementById(contentId);
    if (el) {
      el.classList.toggle('open');
    }
  };

  window.addEventListener('DOMContentLoaded', initQuiz);
})();
