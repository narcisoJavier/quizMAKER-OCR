# CSE 30: Natural Language Processing (Special Topics 1) — Prelim Exam Reviewer

An interactive, comprehensive, zero-dependency web reviewer and examination simulator for **CSE 30 (Natural Language Processing)** at Saint Louis University (SLU SAMCIS).

Meticulously aligned with course lecture presentations by **Engr. Dalos D. Miguel**, class research presentations, and the Panatang Makabayan Bag of Words exercise.

**Live Reviewer (100% Public, No Login Required):** [https://narcisojavier.github.io/quizMAKER-OCR/](https://narcisojavier.github.io/quizMAKER-OCR/)  
**Vercel Preview Deployment:** [https://quizmaker-vacv8tip6-uznir.vercel.app](https://quizmaker-vacv8tip6-uznir.vercel.app)

---

## 🌟 Key Features

- **95 Exam-Style Questions**: Spanning all 3 core exam domains with instant feedback, answer explanations, and automated Google Search links.
- **Dual Explanation Architecture**: Every single topic offers an intuitive plain-English summary paired with an expandable **🔬 Deep Dive / Academic Lecture Notes** section with formal mathematical formulations and slide citations.
- **Interactive Calculators & Simulators**:
  - **Tool 1: Bag of Words & Stopword Reducer** — Replicates the Panatang Makabayan 44 $\to$ 37 dimensional reduction exercise with live vector generation and vocabulary frequency tables.
  - **Tool 2: Naive Bayes Language Classifier** — Interactive probability calculator computing step-by-step prior, likelihood, Laplace (+1) smoothing, and denominator cancellation proof.
  - **Tool 3: Kankanaey Morphology Explorer** — Explores Dalos Miguel's (2009) Cordilleran morphology research (*gabyon*, *ali*, *talak*).
- **36 Active Recall Flashcards**: 3D flip-card study deck with keyboard shortcuts (`Spacebar`, `Arrows`) and category filters.
- **Results & Retry Flow**: Follows the architecture diagram (`diagram.png`) with persistent scorecards and a targeted **"Retry Missed Questions"** mini-quiz mode.
- **Zero Build Step & Offline Support**: Pure vanilla HTML5, CSS3, and modern ES6 JavaScript. No framework overhead, no node build steps, 100% offline-capable via `localStorage`.
- **Dark / Light Mode**: Seamless theme toggling with system-preference detection and persistence.

---

## 📚 Exam Domains Covered

### 1. NLP Concepts, Morphology & Attention (32 Questions)
- 7 Levels of Linguistic Analysis (Phonology, Morphology, Lexical, Syntactic, Semantic, Discourse, Pragmatic).
- Core NLP Tasks: Summarization, Co-reference, Translation, NER, OCR, POS Tagging.
- Morphemes (Free vs. Bound, Lexical vs. Functional), Lexemes, Roots, Paradigms.
- Derivation vs. Inflection & **The Closure Principle** (*"Inflection closes words for further derivation"*).
- Morphological Phenomena: Incorporation (*kinanko*, *edwani*), Clitics/Enclitics (*'m, 's, n't, ba, na, pa, din*), Compounding (*taltalak*).
- Kankanaey Morphology (*Morphology Primer*, Dalos Miguel 2009): Roots *gabyon* (50+ words) and *ali*.
- POS Tagging: Supervised, Unsupervised, Rule-Based (Brill), Probabilistic HMM (Markov assumption, transition vs. emission).
- Tagsets: Tagalog Rabo 59 vs. Buban 65; Penn Treebank, CLAWS; NNC frequency distribution.
- **"Attention Is All You Need" (Vaswani et al., 2017)**: Scaled Dot-Product Attention $\text{softmax}(QK^T/\sqrt{d_k})V$, Multi-Head Attention ($h=8, d_k=64$), Encoder-Decoder $N=6$, Positional Encodings, FFN, $O(1)$ sequential operations.

### 2. Class Research Studies (35 Questions)
- **Group 2: Cloud-Based RoBERTa for HEI SDG Contributions** (*Miguel, Abella, Baladad, Cardenas, Domalanta, Javier, Menos, Sanchez*, IEEE ISCI):
  - 748 documents across 15 Philippine HEIs, multi-hot 17 UN SDGs.
  - BERT vs. RoBERTa (dynamic masking, no NSP, 160 GB data, BPE 50k).
  - **LexDG** regional Ilocano lexicon (ablation dropped F1 from 0.74 to 0.68).
  - 96.77% Weighted Accuracy, 0.74 Micro-F1. Highest: SDG 7 (0.95); Lowest: SDG 2 (0.55).
- **Group 5: Baguio City Social Media Using BERTopic & VADER** (*Arevalo, Bayquen, Cayton, De los Trinos, Fernandez*, ICITE 2023):
  - Multilingual Tagalog-Ilocano-English without translation.
  - BERTopic (c-TF-IDF, MMR diversity 0.8), 15 Baguio governance topics.
  - 5 VADER heuristics: Capitalization, Punctuation, 123 Degree Modifiers, Polarity Shift (*pero, ngem*), 62 Negations (*hindi*).
  - 72.74% Binary Accuracy, 0.7734 F1.
- **Group 4: InfoSentiA** (*Espiritu, Eslao, Donglawen, Fama, Garcia, Genove, Zheng*):
  - Sangguniang Panlungsod ng Baguio legislative portal.
  - LAMP stack + Project Lengua (Node/Express/MongoDB API on Heroku).
  - Facebook Graph API cross-posting and comment collection.
  - AFINN sentiment lexicon (-5 to +5 scale), "Ordinance Pulse" donut charts.
- **Group 1:** CAR Language Mapping (22 indigenous languages identified with PSA data).
- **Group 3:** Moses Statistical Machine Translation (Ilocano $\leftrightarrow$ English).
- **Group 6:** LexiLoko 2.0 (DepEd MTB-MLE 4,065 words + Lexicon-Pointer).
- **Group 7:** Comparative Tagalog POS Taggers (PTPOST4.1 HMM won with 78.3% accuracy).
- **Group 8:** Modeling Kankanaey Adjective Inflections (Dalos Miguel 2009).

### 3. Bag of Words & Naive Bayes Classification (28 Questions)
- Term frequency vector construction & vocabulary indexing.
- **Panatang Makabayan Case Study**:
  - 44-word vocabulary reduced by 7 stopwords (*ang, at, ko, mga, nang, ng, sa*) to **37 dimensions**.
  - Re-indexed 37-word vector (*aking* idx 1 = 4, *Pilipinas* idx 30 = 3).
  - Vector inversion mapping numeric embeddings back to text clauses.
- **Naive Bayes Classification**:
  - Conditional Probability: $P(A|B) = P(A \cap B)/P(B)$.
  - Bayes' Theorem & Conditional Independence Assumption.
  - **Denominator Cancellation Proof**: Constant scaling factor across all classes.
  - Language Identification across 8 Philippine languages (*"naimbag nga rabii"* $\to$ Ilocano).
  - Laplace (+1) Smoothing & "Others" fallback handling.

---

## 🛠️ Project Structure

```
ExamReviewer/
├── index.html              # Main Study Guide & Topic Explorer
├── quiz.html               # Interactive Exam Simulator & Question Engine
├── interactive-tools.html  # BoW, Naive Bayes, & Morphology Calculators
├── flashcards.html         # 3D Flip Active-Recall Flashcards
├── css/
│   └── style.css           # Modern CSS variables, responsive design, dark mode
├── js/
│   ├── app.js              # Theme manager & global utilities
│   ├── quiz.js             # Quiz engine, immediate feedback, retry logic
│   ├── tools.js            # Interactive calculator algorithms
│   └── data.js             # Modules, 105 questions, 44 flashcards, vocabularies
├── data/
│   └── quiz_data.json      # Structured JSON question bank
├── vercel.json             # Vercel deployment configuration & caching headers
├── package.json            # Project manifest for static serving
└── README.md               # Project documentation
```

---

## 🚀 Running Locally

You can run this project with any static file server:

### Using Python:
```powershell
python -m http.server 3000
```
Then navigate to [http://localhost:3000](http://localhost:3000).

### Using Node.js:
```powershell
npx serve .
```

---

## 🌐 Deploying to Vercel

### Option A: Via GitHub (Recommended)
1. Push this repository to GitHub:
   ```powershell
   git push origin main
   ```
2. Open [vercel.com/new](https://vercel.com/new), select your repository, and click **Deploy**.
3. Vercel automatically deploys the static files with zero build configuration required!

### Option B: Via Vercel CLI
```powershell
npx vercel --yes
```

---

## 📄 Academic Integrity & License

Prepared for educational review in **CSE 30: Natural Language Processing** at Saint Louis University, Baguio City, Philippines.
All materials derived from course lectures and cited research papers.
Strictly configured to prevent committing proprietary course PDF files.
