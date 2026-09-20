// Interactive Tools Engine (BoW Sandbox, Naive Bayes Calculator, Kankanaey Morphology Explorer)
(function () {
  // --- TOOL 1: BAG OF WORDS SANDBOX ---
  const PANATANG_TEXT = "Iniibig ko ang Pilipinas, aking lupang sinilangan, Tahanan ng aking lahi, kinukupkop ako at tinutulungang Maging malakas, masipag at marangal Dahil mahal ko ang Pilipinas, Diringgin ko ang payo ng aking magulang, Susundin ko ang tuntunin ng paaralan, Tutuparin ko ang mga tungkulin ng isang mamamayang makabayan, Naglilingkod, nag-aaral at nagdarasal nang buong katapatan. Iaalay ko ang aking buhay, pangarap, pagsisikap Sa bansang Pilipinas.";

  function initBoWTool() {
    const textInput = document.getElementById('bow-input-text');
    const stopwordToggle = document.getElementById('bow-stopword-toggle');
    const runBtn = document.getElementById('bow-run-btn');
    const resetPledgeBtn = document.getElementById('bow-load-pledge-btn');

    if (!textInput) return;

    if (resetPledgeBtn) {
      resetPledgeBtn.addEventListener('click', () => {
        textInput.value = PANATANG_TEXT;
        runBoW();
      });
    }

    if (runBtn) {
      runBtn.addEventListener('click', runBoW);
    }

    if (stopwordToggle) {
      stopwordToggle.addEventListener('change', runBoW);
    }

    // Run initial on pledge
    runBoW();
  }

  function runBoW() {
    const text = document.getElementById('bow-input-text').value;
    const applyStopwords = document.getElementById('bow-stopword-toggle').checked;

    // Tokenize
    const tokens = text.toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .split(/\s+/)
      .filter(t => t.length > 0);

    const stopwords = (typeof BOW_STOPWORDS_7 !== 'undefined') ? BOW_STOPWORDS_7 : ["ang", "at", "ko", "mga", "nang", "ng", "sa"];
    const baseVocab = (typeof BOW_VOCAB_44 !== 'undefined') ? BOW_VOCAB_44 : [];

    let activeVocab = [];
    if (applyStopwords) {
      activeVocab = (typeof BOW_VOCAB_37 !== 'undefined') ? BOW_VOCAB_37 : baseVocab.filter(w => !stopwords.includes(w.toLowerCase()));
    } else {
      activeVocab = baseVocab;
    }

    // Count frequencies for active vocabulary
    const counts = {};
    activeVocab.forEach(w => counts[w.toLowerCase()] = 0);

    tokens.forEach(tok => {
      if (counts[tok] !== undefined) {
        counts[tok]++;
      }
    });

    // Build vector
    const vector = activeVocab.map(w => counts[w.toLowerCase()]);

    // Update UI Stats
    document.getElementById('bow-total-tokens').textContent = tokens.length;
    document.getElementById('bow-vocab-size').textContent = activeVocab.length;
    document.getElementById('bow-stopwords-status').textContent = applyStopwords ? "Applied (7 Removed)" : "Disabled (Full 44-D)";

    // Update Vector Display
    const vectorOutput = document.getElementById('bow-vector-output');
    vectorOutput.textContent = `[${vector.join(', ')}]`;

    // Render Vocabulary Table
    const tableBody = document.getElementById('bow-vocab-table-body');
    tableBody.innerHTML = '';

    activeVocab.forEach((w, idx) => {
      const cnt = counts[w.toLowerCase()];
      const tr = document.createElement('tr');
      if (cnt > 1) {
        tr.style.backgroundColor = 'var(--accent-light)';
        tr.style.fontWeight = '700';
      }
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><code>${w}</code></td>
        <td>${cnt}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // --- TOOL 2: NAIVE BAYES CALCULATOR ---
  const MOCK_LANG_PRIORS = {
    "Ilocano": 0.333,
    "Tagalog": 0.333,
    "Pangasinan": 0.334
  };

  // Sample Lexical Likelihoods based on presentation workshop data
  const MOCK_WORD_LIKELIHOODS = {
    "naimbag": { "Ilocano": 0.25, "Tagalog": 0.001, "Pangasinan": 0.001 },
    "nga": { "Ilocano": 0.35, "Tagalog": 0.01, "Pangasinan": 0.05 },
    "rabii": { "Ilocano": 0.20, "Tagalog": 0.001, "Pangasinan": 0.001 },
    "adda": { "Ilocano": 0.30, "Tagalog": 0.001, "Pangasinan": 0.001 },
    "maysa": { "Ilocano": 0.25, "Tagalog": 0.001, "Pangasinan": 0.001 },
    "ang": { "Ilocano": 0.01, "Tagalog": 0.40, "Pangasinan": 0.02 },
    "mga": { "Ilocano": 0.01, "Tagalog": 0.35, "Pangasinan": 0.02 },
    "ibon": { "Ilocano": 0.001, "Tagalog": 0.15, "Pangasinan": 0.001 },
    "ay": { "Ilocano": 0.005, "Tagalog": 0.30, "Pangasinan": 0.005 },
    "lumilipad": { "Ilocano": 0.001, "Tagalog": 0.12, "Pangasinan": 0.001 },
    "masaya": { "Ilocano": 0.01, "Tagalog": 0.22, "Pangasinan": 0.01 },
    "tao": { "Ilocano": 0.05, "Tagalog": 0.25, "Pangasinan": 0.05 }
  };

  function initNaiveBayesTool() {
    const calcBtn = document.getElementById('nb-calc-btn');
    const inputField = document.getElementById('nb-input-sentence');
    const presetSelect = document.getElementById('nb-preset-select');

    if (!calcBtn) return;

    if (presetSelect) {
      presetSelect.addEventListener('change', () => {
        if (presetSelect.value) {
          inputField.value = presetSelect.value;
          runNaiveBayes();
        }
      });
    }

    calcBtn.addEventListener('click', runNaiveBayes);
    runNaiveBayes();
  }

  function runNaiveBayes() {
    const sentence = document.getElementById('nb-input-sentence').value.trim();
    const useLaplace = document.getElementById('nb-laplace-toggle').checked;
    const words = sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(/\s+/).filter(w => w);

    const languages = ["Ilocano", "Tagalog", "Pangasinan"];
    const results = {};

    languages.forEach(lang => {
      let score = MOCK_LANG_PRIORS[lang];
      let steps = [`P(${lang}) = ${score.toFixed(3)}`];

      words.forEach(w => {
        let p_w = (MOCK_WORD_LIKELIHOODS[w] && MOCK_WORD_LIKELIHOODS[w][lang]) ? MOCK_WORD_LIKELIHOODS[w][lang] : (useLaplace ? 0.005 : 0.0);
        score *= p_w;
        steps.push(`P("${w}" | ${lang}) = ${p_w}`);
      });

      results[lang] = {
        finalScore: score,
        steps: steps.join(' × ')
      };
    });

    // Find winner
    let winner = languages[0];
    let maxScore = -1;
    languages.forEach(l => {
      if (results[l].finalScore > maxScore) {
        maxScore = results[l].finalScore;
        winner = l;
      }
    });

    // Render UI
    document.getElementById('nb-winner-badge').textContent = `🏆 Predicted Language: ${winner}`;

    const breakdownEl = document.getElementById('nb-breakdown-output');
    breakdownEl.innerHTML = '';

    languages.forEach(lang => {
      const isWinner = (lang === winner);
      const div = document.createElement('div');
      div.style.padding = '0.75rem';
      div.style.marginBottom = '0.5rem';
      div.style.borderRadius = 'var(--radius-sm)';
      div.style.border = isWinner ? '2px solid var(--success)' : '1px solid var(--border-color)';
      div.style.backgroundColor = isWinner ? 'var(--success-bg)' : 'var(--bg-card)';

      div.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <strong style="color:${isWinner ? 'var(--success)' : 'var(--text-primary)'}">${lang} ${isWinner ? '✅' : ''}</strong>
          <span style="font-family:monospace; font-weight:700;">Score: ${results[lang].finalScore.toExponential(4)}</span>
        </div>
        <div style="font-size:0.8rem; color:var(--text-muted); font-family:monospace;">
          ${results[lang].steps}
        </div>
      `;
      breakdownEl.appendChild(div);
    });
  }

  // --- TOOL 3: KANKANAEY MORPHOLOGY EXPLORER ---
  const KANKANAEY_ROOTS = {
    "gabyon": [
      { word: "Gabyon", pos: "Noun", meaning: "Hoe, hand-operated soil digging implement" },
      { word: "gabyonan", pos: "Verb", meaning: "To use a hoe to dig a portion of an object/land" },
      { word: "gabyonen", pos: "Verb", meaning: "Will use a hoe to dig an object" },
      { word: "ginabgabyon", pos: "Adjective", meaning: "Referring to an object for which a hoe had been used" },
      { word: "ginabyon", pos: "Adjective", meaning: "Referring to an object for which a hoe was used" },
      { word: "ginmabyon", pos: "Verb", meaning: "Did the act of using a hoe" },
      { word: "gumabyon", pos: "Verb", meaning: "Will do the act of using a hoe" },
      { word: "igabyon", pos: "Verb", meaning: "Will use the hoe" },
      { word: "Gabgabyon", pos: "Noun (Reduplication)", meaning: "Small hoe / miniature hoe / toy hoe" },
      { word: "kinanko", pos: "Verb + Pronoun (Incorporation)", meaning: "Concatenation of kinan (ate) + ko (I) = 'I ate it'" },
      { word: "Mangabyonda", pos: "Verb + Pronoun", meaning: "They will use a hoe" },
      { word: "Gabyonko", pos: "Noun + Pronoun", meaning: "My hoe" }
    ],
    "ali": [
      { word: "Ali", pos: "Root Word", meaning: "To come" },
      { word: "Inmali", pos: "Verb-simple past", meaning: "Came" },
      { word: "inmal-ali", pos: "Verb-past perfect", meaning: "Had come" },
      { word: "inmaliali", pos: "Verb-past continuous", meaning: "Had always been coming" },
      { word: "kaal-ali", pos: "Adjective", meaning: "Referring to an object who/that came recently" },
      { word: "Kaali", pos: "Adjective", meaning: "Referring to an object who came immediately" },
      { word: "umal-ali", pos: "Verb-present continuous", meaning: "Coming" },
      { word: "Umali", pos: "Verb-simple present/future", meaning: "Come / Will come" },
      { word: "Umaliak", pos: "Verb + pronoun", meaning: "I come / I will come" },
      { word: "Makiali", pos: "Verb-simple future", meaning: "Will come as a companion" },
      { word: "Nakiali", pos: "Verb-simple past", meaning: "Came as a companion" },
      { word: "Kaanali", pos: "Adjective", meaning: "Referring to objects who suddenly came" }
    ],
    "talak": [
      { word: "Talak", pos: "Noun (Root)", meaning: "Car" },
      { word: "Taltalak", pos: "Noun (Compounding/Reduplication)", meaning: "Toy car / miniature car" }
    ]
  };

  function initMorphologyTool() {
    const rootSelect = document.getElementById('morph-root-select');
    if (!rootSelect) return;

    rootSelect.addEventListener('change', renderMorphologyTable);
    renderMorphologyTable();
  }

  function renderMorphologyTable() {
    const root = document.getElementById('morph-root-select').value;
    const data = KANKANAEY_ROOTS[root] || [];
    const tbody = document.getElementById('morph-table-body');
    tbody.innerHTML = '';

    data.forEach(item => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong style="color:var(--accent-primary);">${item.word}</strong></td>
        <td><span class="badge" style="background:var(--accent-light); color:var(--accent-primary); padding:0.2rem 0.5rem; border-radius:var(--radius-sm); font-size:0.8rem; font-weight:700;">${item.pos}</span></td>
        <td>${item.meaning}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    initBoWTool();
    initNaiveBayesTool();
    initMorphologyTool();
  });
})();
