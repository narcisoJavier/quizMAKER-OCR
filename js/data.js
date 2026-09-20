// Auto-generated Comprehensive Exam Data for CSE 30 NLP
const REVIEWER_MODULES = [
  {
    "id": "domain1",
    "title": "Domain 1: NLP Concepts & Morphology",
    "badge": "Core Theory",
    "summary": "Covers foundational NLP definitions, linguistic hierarchy, morpheme classification, derivation vs. inflection, closure principle, incorporation, clitics, compounding, Kankanaey affixes, POS tagging approaches, tagsets (Rabo 59, Buban 65, Penn Treebank), and evaluation metrics.",
    "sections": [
      {
        "id": "nlp_fundamentals",
        "title": "1.1 What is NLP & Levels of Linguistic Analysis",
        "simple": "Natural Language Processing (NLP) is AI that teaches computers how to read, understand, and generate human languages. Human language is analyzed across distinct hierarchical levels: sounds (Phonology), word structures (Morphology), dictionary definitions (Lexical), sentence grammar (Syntactic), literal meaning (Semantic), context/intent (Pragmatic), and multi-sentence flow (Discourse).",
        "deepDive": "<b>Academic Definition:</b> NLP bridges computer science, artificial intelligence, and formal linguistics (Khurana et al., 2018).<br><br><b>The 7 Levels of Linguistic Analysis:</b><ol><li><b>Phonology:</b> The study of the sound system of a language and phonemes.</li><li><b>Morphology:</b> The study of word structure and the meaningful sub-components of words.</li><li><b>Lexical Level:</b> Analysis of words as discrete dictionary units (lexemes).</li><li><b>Syntactic Level:</b> Grammatical structure, parse trees, and phrase hierarchy governing how words combine into valid sentences.</li><li><b>Semantic Level:</b> Literal meaning of words and compositional meaning of phrases.</li><li><b>Discourse Level:</b> Meaning across multiple consecutive sentences (e.g. anaphoric reference, discourse relations).</li><li><b>Pragmatic Level:</b> Meaning in real-world communicative context, speaker intentions, and non-literal speech acts.</li></ol><b>Modern Paradigm:</b> Today, classical rule-based methods are integrated with large language models and <i>Retrieval-Augmented Generation (RAG)</i> to ground responses in verified corpora."
      },
      {
        "id": "core_nlp_tasks",
        "title": "1.2 Core NLP Tasks & Pipeline",
        "simple": "NLP solves real problems by breaking text down into specific tasks: summarizing long texts (Automatic Summarization), tracking who 'he' or 'she' refers to (Co-reference Resolution), translating languages (Machine Translation), identifying names and places (NER), extracting text from photos/scans (OCR), and tagging words with parts of speech (POS Tagging).",
        "deepDive": "<b>Key NLP Tasks (Lecture Overview):</b><ul><li><b>Automatic Summarization:</b> Generates a concise, coherent summary preserving core information. May be <i>extractive</i> (selecting key sentences) or <i>abstractive</i> (generating novel paraphrased text).</li><li><b>Co-reference Resolution:</b> Determining when multiple linguistic expressions refer to the same real-world entity (e.g., 'Maria entered. <u>She</u> sat down' &rarr; 'Maria' = 'She').</li><li><b>Discourse Analysis:</b> Modeling structure and relational semantics between sentences and conversational turns.</li><li><b>Morphological Segmentation:</b> Deconstructing polymorphemic words into constitutive root and affix morphemes.</li><li><b>Named Entity Recognition (NER):</b> Locating and classifying mentions of entities into predefined categories (Person, Organization, Location, Date).</li><li><b>Optical Character Recognition (OCR):</b> Converting pixels from printed/handwritten scanned documents into machine-encoded characters (e.g., Pytesseract).</li><li><b>Part of Speech (POS) Tagging:</b> Annotating every token with its grammatical category based on lexical definition and contextual syntactic function.</li></ul>"
      },
      {
        "id": "morphology_foundations",
        "title": "1.3 Morphemes, Lexemes, Paradigms & Roots",
        "simple": "A <b>morpheme</b> is the smallest puzzle piece of language that carries meaning (like 'un-', 'break', and '-able'). A <b>lexeme</b> is an abstract dictionary word (like SING). A <b>paradigm</b> is the whole family of different forms that lexeme can take ('sing', 'sang', 'sung', 'sings', 'singing'). The <b>root</b> is the core base word before any prefixes or suffixes are added.",
        "deepDive": "<b>Formal Morphological Concepts (Spencer & Zwicky, 1998):</b><ul><li><b>Morpheme:</b> The minimal distinctive unit of grammar and meaning. Subdivided into:<ul><li><b>Free Morphemes:</b> Can stand alone as independent words (e.g., <i>dog</i>, <i>hoe</i>, <i>buhay</i>).</li><li><b>Bound Morphemes:</b> Cannot stand alone; must attach to other morphemes (affixes like <i>-ing</i>, <i>un-</i>, <i>-an</i>, <i>nag-</i>).</li><li><b>Lexical Morphemes:</b> Carry content meaning (nouns, verbs, adjectives).</li><li><b>Functional Morphemes:</b> Express grammatical relations (prepositions, conjunctions, articles).</li></ul></li><li><b>Lexeme:</b> An abstract unit of morphological analysis corresponding to a set of word forms that share a core semantic meaning and syntactic category (written in caps, e.g., RUN).</li><li><b>Paradigm:</b> The complete set of word forms that realize a single lexeme. Example: The paradigm of SING is <code>{sing, sang, sung, sings, singing}</code>.</li><li><b>Root (Lexeme's Root):</b> The indivisible central morpheme of a lexeme from which its paradigm is deduced.</li></ul>"
      },
      {
        "id": "derivation_vs_inflection",
        "title": "1.4 Derivation vs. Inflection & The Closure Principle",
        "simple": "<b>Inflection</b> changes the grammar of a word (like tense or plural) without changing its part of speech or core meaning (e.g., <i>talk</i> &rarr; <i>talked</i>; both are verbs). <b>Derivation</b> creates a completely new word or changes its part of speech (e.g., noun <i>malice</i> &rarr; adjective <i>malicious</i>).<br><br><b>The Closure Principle:</b> Inflection shuts the door! Once you add an inflectional ending, you cannot add any more derivational affixes.",
        "deepDive": "<b>Comprehensive Comparison:</b><table class='study-table'><thead><tr><th>Dimension</th><th>Inflection</th><th>Derivation</th></tr></thead><tbody><tr><td><b>Part of Speech Change</b></td><td>Never changes POS (Verb &rarr; Verb: <i>talk</i> &rarr; <i>talked</i>; Noun &rarr; Noun: <i>fear</i> &rarr; <i>fears</i>)</td><td>Frequently changes POS (Noun &rarr; Adj: <i>malice</i> &rarr; <i>malicious</i>; Verb &rarr; Noun: <i>sing</i> &rarr; <i>singer</i>)</td></tr><tr><td><b>Semantic Meaning</b></td><td>Preserves core concept; adjusts grammatical features (tense, aspect, number, person)</td><td>Creates a distinct semantic concept or new dictionary entry</td></tr><tr><td><b>Productivity</b></td><td>Highly productive and regular across grammatical paradigms</td><td>Variable productivity; often semantically idiosyncratic</td></tr><tr><td><b>Position</b></td><td>Applies at the outer edges of words</td><td>Applies closer to the root morpheme</td></tr></tbody></table><br><b>The Closure Principle in Morphology:</b><br><i>'Inflection closes words for further derivation, while derivation does not.'</i> (Spencer & Zwicky / Miguel). Derivational affixes must attach first; once inflectional affixes are attached to mark grammatical agreement/tense, the word is closed to subsequent derivational processes (e.g., <i>nation</i> &rarr; <i>national</i> [derivation] &rarr; <i>nationalize</i> [derivation] &rarr; <i>nationalized</i> [inflection]; you cannot say *<i>nationalized-tion</i>)."
      },
      {
        "id": "incorporation_clitics_compounding",
        "title": "1.5 Incorporation, Clitics & Compounding",
        "simple": "<b>Incorporation:</b> Fusing a verb with an object or pronoun into a single word (like Kankanaey <i>kinanko</i> = 'ate' + 'I' &rarr; 'I ate it').<br><b>Clitics:</b> Words that cannot stand on their own phonologically and must lean onto neighbor words (like <i>'m</i> in <i>I'm</i> or Filipino <i>ba, na, pa</i>).<br><b>Compounding:</b> Putting two whole words together to mean one thing (like <i>Green House</i>, or Kankanaey <i>taltalak</i> = 'toy car').",
        "deepDive": "<b>Linguistic Phenomena in Philippine & Global Context:</b><ul><li><b>Incorporation:</b> The syntactic concatenation of a verb head with another constituent (nominal argument, pronoun, or adverb) to form a single complex predicate realizing combined grammatical relations (Gerdts, 1998).<br><i>Kankanaey Examples:</i><ul><li><code>kinanko</code> = <code>kinan</code> (ate) + <code>ko</code> (I) &rarr; 'I ate it'.</li><li><code>edwani</code> = <code>ed</code> (in) + <code>nuwani</code> (present) &rarr; 'in the present time' (showing elision of 'nu').</li></ul></li><li><b>Clitics ('Enclitics'):</b> Syntactically independent words that lack independent phonological stress and therefore attach phonologically to an adjacent host word.<br><i>English Examples:</i> <code>'m</code> in <i>I'm</i>, <code>'s</code> in <i>he's</i>, <code>n't</code> in <i>don't</i>/<i>can't</i>.<br><i>Philippine Enclitics:</i> Second-position discourse particles such as <i>ba, na, pa, man, din, daw</i>.</li><li><b>Compounding:</b> Morphological combination of two or more independent lexical roots into a single compound lexeme with unified semantic interpretation.<br><i>English Example:</i> <i>Green House</i> (a building for plants, not simply a house colored green).<br><i>Kankanaey Example:</i> From root <code>talak</code> (car), partial reduplication forms <code>taltalak</code> (toy car / miniature vehicle).</li></ul>"
      },
      {
        "id": "kankanaey_case_study",
        "title": "1.6 Kankanaey Morphology Case Study (Miguel 2009)",
        "simple": "In Philippine indigenous languages like Kankanaey (Benguet), single root words can generate dozens of different words through prefixes, suffixes, infixes, and repetition! For example, the root word <b>gabyon</b> (a farming hoe) is a repository for over 50 distinct words, and <b>ali</b> (to come) generates complex tenses, companions, and actions.",
        "deepDive": "<b>Research Foundation:</b> <i>Morphology Primer of the Kankanaey Language of Benguet Philippines</i> (Miguel, 2009). Nouns and verbs in Kankanaey serve as semantic repositories producing dozens of derivations, inflections, and compound incorporations.<br><br><b>Key Affixation Phenomena:</b><ul><li><b>Prefixation:</b> Adding morpheme before root (e.g., <code>igabyon</code> &rarr; will use the hoe).</li><li><b>Suffixation:</b> Adding morpheme after root (e.g., <code>gabyonan</code> &rarr; to use a hoe to dig an area).</li><li><b>Infixation:</b> Inserting morpheme inside root (e.g., <code>g-in-abyon</code> &rarr; hoe was used; <code>g-um-abyon</code> &rarr; will use a hoe).</li><li><b>Reduplication:</b> Repeating root syllables (e.g., <code>gab-gabyon</code> &rarr; miniature/toy hoe; <code>ginabgabyon</code>).</li><li><b>Compound Incorporation:</b> Concatenating roots and pronouns: <code>mangabyonda</code> ('they will use a hoe'), <code>nangabyonak</code> ('I used a hoe'), <code>gabyonko</code> ('my hoe').</li></ul><b>The Paradigm of 'ali' (to come):</b><ul><li><code>inmali</code> (Verb-simple past): came</li><li><code>inmal-ali</code> (Verb-past perfect): had come</li><li><code>inmaliali</code> (Verb-past continuous): had always been coming</li><li><code>kaali</code> (Adjective): referring to an object who came immediately</li><li><code>umal-ali</code> (Verb-present continuous): coming</li><li><code>umaliak</code> (Verb + pronoun): I come / I will come</li><li><code>makiali</code> (Verb-simple future): will come as a companion</li><li><code>kaanali</code> (Adjective): referring to objects who suddenly came</li></ul>"
      },
      {
        "id": "pos_tagging_approaches",
        "title": "1.7 POS Tagging Approaches & Tagsets",
        "simple": "Part-of-Speech (POS) tagging labels words as nouns, verbs, adjectives, etc. There are two main paradigms: <b>Supervised</b> (learns from human-labeled text) and <b>Unsupervised</b> (clusters untagged text automatically). It can be done using strict grammar rules (<b>Rule-Based</b>) or statistical chances (<b>Probabilistic / HMM</b>). In the Philippines, Rabo created a 59-tag set and Dr. Buban expanded it to 65 tags.",
        "deepDive": "<b>POS Tagging Architectures:</b><ul><li><b>Supervised Tagging:</b> Utilizes a pre-annotated training corpus annotated by expert linguists. Extracts word frequencies, affix patterns, and tag n-gram transition probabilities.</li><li><b>Unsupervised Tagging:</b> Induces tag sets and dictionary clusters directly from raw untagged corpora using clustering algorithms (e.g. Expectation-Maximization, Baum-Welch).</li><li><b>Rule-Based POS Tagging:</b> Leverages human-crafted linguistic rule databases (e.g., Eric Brill's Transformation-Based Tagger). Rule example: <i>'If a word is preceded by a determiner (DTC) and followed by a noun (NNC), tag it as an adjective (JJD).'</i></li><li><b>Probabilistic POS Tagging (Hidden Markov Models - HMM):</b> Finds optimal tag sequence $\\hat{T} = \\arg\\max_T P(T|W) = \\arg\\max_T P(T)P(W|T)$. Employs the <i>Markov Assumption</i> where the probability of tag $t_i$ depends only on preceding tag $t_{i-1}$ (Bigram) or $t_{i-2}, t_{i-1}$ (Trigram). Combines:<ul><li><b>Lexical / Emission Probability:</b> $P(w_i | t_i)$ &mdash; chance of word $w$ given tag $t$.</li><li><b>Contextual / Transition Probability:</b> $P(t_i | t_{i-1})$ &mdash; chance of tag $t_i$ following tag $t_{i-1}$.</li></ul></li></ul><b>Standard Tagsets:</b><ul><li><b>Tagalog Tagsets:</b> Rabo (2004) Tagset = <b>59 tags</b>; Revised Tagalog Tagset by Dr. Buban = <b>65 tags</b>.</li><li><b>English Tagsets:</b> Penn Treebank (NN, NNS, NNP, NNPS, PRP, VB, VBD, JJ, RB); CLAWS Tagset (NN1, NN2, VVO, AJO); Universal Tagset.</li><li><b>Tag Distribution in Tagalog Corpora:</b> <code>NNC</code> (Common Noun) is the <b>highest frequency tag</b> and the most common default tag assigned to unknown words. <code>VBOI</code> has zero/lowest frequency.</li><li><b>Corpus Validity Factors:</b> Punctuation delimiters (. , ! ?), double quotes, ellipses, and ambiguous abbreviations with periods (e.g. 'Dr.', 'e.g.') which confound sentence boundary detection.</li></ul>"
      },
      {
        "id": "evaluation_metrics",
        "title": "1.8 Evaluation Metrics in NLP",
        "simple": "We test NLP models using 4 main metrics: <b>Accuracy</b> (percentage of all right answers), <b>Precision</b> (when the model predicts something, how often is it right?), <b>Recall</b> (out of all actual targets, how many did it catch?), and <b>F1-Score</b> (the balanced harmonic average of Precision and Recall). <b>Error Rate</b> is just $1 - \\text{Accuracy}$.",
        "deepDive": "<b>Mathematical Formulations:</b><ul><li><b>Accuracy:</b> $\\frac{TP + TN}{TP + TN + FP + FN} = \\frac{\\text{Correct Predictions}}{\\text{Total Predictions}}$</li><li><b>Precision:</b> $\\frac{TP}{TP + FP}$ &mdash; Measures quality and avoidance of false alarms.</li><li><b>Recall (Sensitivity):</b> $\\frac{TP}{TP + FN}$ &mdash; Measures completeness and avoidance of missed targets.</li><li><b>F1-Measure:</b> $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}$ &mdash; Harmonic mean penalizing extreme divergence between precision and recall.</li><li><b>Error Rate:</b> $1 - \\text{Accuracy} = \\frac{FP + FN}{\\text{Total}}$</li><li><b>Micro vs. Macro Averaging:</b> Micro pools global true positives and false positives (better for overall performance under class imbalance); Macro computes unweighted average metric across all individual classes.</li></ul>"
      }
    ]
  },
  {
    "id": "domain2",
    "title": "Domain 2: Class Studies on NLP (Cloud-Based RoBERTa for SDGs)",
    "badge": "Research Study",
    "summary": "Covers the class research study presented by Group 2: 'A Cloud-Based RoBERTa NLP for Assessing Academic Institutions' Contributions to Sustainable Development Goals' by Dalos Miguel, Jahn Crystan Abella et al., its problem motivation, methodology, BERT vs. RoBERTa comparison, LexDG regional lexicon, results, and deployment.",
    "sections": [
      {
        "id": "sdg_motivation",
        "title": "2.1 Research Background, Problem & Institutional Setting",
        "simple": "Universities in the Philippines do a lot of research and community work for the 17 UN Sustainable Development Goals (SDGs). However, evaluating their reports by hand is slow, subjective, and prone to <b>'SDG-washing'</b> (making fake or exaggerated green claims). Existing rating tools like STARS only give broad ratings and cannot map specific text to individual SDGs. Furthermore, Philippine reports mix English with regional words like Ilocano.",
        "deepDive": "<b>Paper Context:</b> <i>A Cloud-Based RoBERTa NLP for Assessing Academic Institutions' Contributions to Sustainable Development Goals</i> (Dalos Miguel, Jahn Crystan Abella, Rey John Agbayani, Joshua Daniel David, Darren Franz Domantay, Derek Isabelo, Hans Lloyd Reyes, Ariel Tarlit Jr., Maervin Villalobos / Group 2: Baladad, Cardenas, Domalanta, Javier, Menos, Sanchez, SLU 2026).<br><br><b>Key Problems Identified:</b><ul><li><b>High Document Volume & Subjectivity:</b> Manual analysis of institutional strategic plans, annual reports, and curricula by evaluators is slow, labor-intensive, and inconsistent.</li><li><b>Threat of 'SDG-Washing':</b> Institutions presenting superficial sustainability claims without verifiable, data-backed operational evidence.</li><li><b>Limitations of Existing Frameworks:</b> Systems like AASHE STARS provide macro-level institutional scoring but completely lack fine-grained, sentence-level multi-label mapping to the 17 individual UN SDGs.</li><li><b>The Philippine Linguistic Challenge:</b> Higher Education Institution (HEI) documents across the Philippines frequently blend English with regional and indigenous terms (e.g. Ilocano agricultural terms, Cordilleran terminology), which off-the-shelf Western NLP models fail to interpret correctly.</li></ul>"
      },
      {
        "id": "sdg_methodology",
        "title": "2.2 Data Pipeline, Multi-Hot Encoding & LexDG Lexicon",
        "simple": "The team collected <b>748 documents from 15 Philippine universities</b> using web scrapers (Selenium/BeautifulSoup) and scanned PDF readers (Pytesseract OCR). Since one document can hit multiple SDGs, they used <b>multi-hot vector encoding</b>. They cleaned text with NLTK and solved class imbalance with random oversampling. Crucially, they built <b>LexDG</b>, a custom dictionary of regional and Ilocano terms.",
        "deepDive": "<b>End-to-End Methodology:</b><ol><li><b>Data Collection:</b> 748 institutional documents (sustainability reports, strategic plans, academic curricula) collected from 15 Philippine HEIs via automated web scraping (Selenium + BeautifulSoup) and manual entry for firewalled repositories.</li><li><b>Optical Character Recognition (OCR):</b> Pytesseract OCR was employed to parse scanned non-searchable PDFs and image-based institutional reports into clean text.</li><li><b>Multi-Hot Vector Encoding:</b> Because a single document frequently addresses multiple SDGs simultaneously, target labels were formulated as 17-dimensional multi-hot binary vectors (e.g. <code>[0, 1, 0, 0, ..., 1, 0]</code>).</li><li><b>Data Preprocessing:</b> Handled via NLTK: tokenization, POS-tag-guided lemmatization (ensuring verbs and nouns are lemmatized according to syntactic role), stopword removal, and noise filtering (URLs, emails, numerals, punctuation).</li><li><b>Class Imbalance Remediation:</b> Addressed via <i>Random Oversampling</i>, duplicating minority SDG class instances in training splits to match majority representations. Final split: <b>80% Training / 10% Validation / 10% Testing</b>.</li><li><b>LexDG (Domain-Specific Lexicon):</b> A curated lexicon of Philippine regional and indigenous vocabulary (particularly Ilocano and Cordilleran terms) developed to preserve local contextual nuance during classification.</li></ol>"
      },
      {
        "id": "bert_vs_roberta",
        "title": "2.3 Model Architecture: BERT vs. RoBERTa Matrix",
        "simple": "The study used <b>RoBERTa</b>, which is a modern, highly optimized upgrade of Google's BERT model. RoBERTa wins because it uses <b>dynamic masking</b> (masks different words every round), throws away the unnecessary Next Sentence Prediction task, trains on <b>10x more data (160 GB vs 16 GB)</b> with massive batches, and uses a 50,000-word byte-pair tokenizer.",
        "deepDive": "<b>Architectural Comparison Table (Slide 8 & Research Paper):</b><table class='study-table'><thead><tr><th>Feature</th><th>BERT (Devlin et al., 2018)</th><th>RoBERTa (Liu et al., 2019)</th></tr></thead><tbody><tr><td><b>Masking Strategy</b></td><td>Static Masking (tokens masked once during preprocessing)</td><td><b>Dynamic Masking</b> (tokens masked randomly on-the-fly across training epochs)</td></tr><tr><td><b>Next Sentence Prediction (NSP)</b></td><td>Included ($[CLS]$ predicts if Sentence B follows Sentence A)</td><td><b>Removed entirely</b> (demonstrated to hurt downstream classification performance)</td></tr><tr><td><b>Pre-training Data Size</b></td><td>16 GB (BooksCorpus + English Wikipedia)</td><td><b>160 GB</b> (adds CommonCrawl, OpenWebText, CC-News, Stories)</td></tr><tr><td><b>Batch Size & Training Steps</b></td><td>Smaller mini-batches (256 sequences) over fewer steps</td><td><b>Massive mini-batches</b> (up to 8,000 sequences) over extended steps</td></tr><tr><td><b>Tokenizer & Vocab Size</b></td><td>WordPiece (Vocabulary: ~30,000 tokens)</td><td><b>Byte-Level BPE</b> (Vocabulary: 50,000 tokens)</td></tr><tr><td><b>Benchmark Performance</b></td><td>Baseline benchmark for bidirectional transformers</td><td>Consistently outperforms BERT across GLUE, SQuAD, and RACE</td></tr></tbody></table><br><b>Frameworks Used:</b> PyTorch and Hugging Face Transformers trained on Google Colab with hyperparameter grid search."
      },
      {
        "id": "sdg_results_ablation",
        "title": "2.4 Experimental Results, Baseline Comparison & LexDG Ablation",
        "simple": "The fine-tuned RoBERTa model achieved <b>96.77% accuracy</b> with an F1-score of 0.74, beating Logistic Regression (0.64), SVM (0.67), and standard BERT (0.70). In their ablation study, when they took away <b>LexDG</b>, the F1-score plummeted from 0.74 down to 0.68\u2014proving that local regional dictionaries are vital for Philippine NLP!",
        "deepDive": "<b>Model Performance Metrics:</b><ul><li><b>Weighted Accuracy:</b> <code>96.77%</code></li><li><b>Micro-Precision:</b> <code>0.80</code> | <b>Micro-Recall:</b> <code>0.70</code> | <b>Micro-F1:</b> <code>0.74</code></li><li><b>Macro-Average:</b> Precision: 0.80 | Recall: 0.69 | F1: 0.743</li></ul><br><b>Baseline Benchmark Comparison:</b><table class='study-table'><thead><tr><th>Model</th><th>Accuracy</th><th>Precision</th><th>Recall</th><th>F1-Score</th></tr></thead><tbody><tr><td>Logistic Regression</td><td>0.81</td><td>0.68</td><td>0.61</td><td>0.64</td></tr><tr><td>Support Vector Machine (SVM)</td><td>0.83</td><td>0.70</td><td>0.64</td><td>0.67</td></tr><tr><td>Standard BERT</td><td>0.88</td><td>0.74</td><td>0.66</td><td>0.70</td></tr><tr><td><b>Fine-Tuned RoBERTa (Proposed)</b></td><td><b>0.9677</b></td><td><b>0.80</b></td><td><b>0.70</b></td><td><b>0.74</b></td></tr></tbody></table><br><b>The LexDG Ablation Study:</b><br>To test the statistical necessity of the regional lexicon, an ablation experiment was performed without LexDG. The Micro-F1 score dropped significantly from <b>0.74 to 0.68</b>, proving that domain-specific regional lexicons prevent false negatives when parsing localized Philippine terminology."
      },
      {
        "id": "sdg_cloud_limitations",
        "title": "2.5 Cloud Deployment, Costs & Model Limitations",
        "simple": "The app was deployed on <b>Google Cloud Vertex AI + Firestore</b> with a Node.js UI and Flask API, costing only \u20b12,700\u2013\u20b18,300/month. The two main limitations are <b>category overlap</b> (confusing SDG 2 Zero Hunger with SDG 13 Climate Action because both talk about farming and weather) and <b>data imbalance</b> in minority SDGs.",
        "deepDive": "<b>Cloud Infrastructure Architecture:</b><ul><li><b>Model Serving:</b> Google Cloud Platform (GCP) Vertex AI endpoint.</li><li><b>Database:</b> Cloud Firestore (NoSQL document store for real-time institutional evaluation history).</li><li><b>API & Frontend:</b> RESTful Python Flask backend with a responsive Node.js / web user interface.</li><li><b>Operational Cost:</b> Estimated at <b>\u20b12,700 &ndash; \u20b18,300 per month</b> depending on inferencing throughput.</li></ul><b>Identified Limitations:</b><ul><li><b>Category Overlap:</b> Semantic entanglement between thematic goals. Most notably: <b>SDG 2 (Zero Hunger)</b> and <b>SDG 13 (Climate Action)</b> share heavy lexical overlap around agricultural sustainability, causing cross-classification confusion (SDG 2 recorded the lowest F1-score of 0.55). Highest performing was <b>SDG 7 (Affordable and Clean Energy)</b> with F1 of 0.95.</li><li><b>Data Imbalance Sensitivity:</b> SDGs with smaller document representation in training data yielded lower recall rates despite random oversampling.</li></ul>"
      }
    ]
  },
  {
    "id": "domain3",
    "title": "Domain 3: Bag of Words & Naive Bayes Classification",
    "badge": "Math & Exercises",
    "summary": "Covers Bag of Words vectorization, the Panatang Makabayan 44 to 37 dimensionality reduction exercise, vector inversion, Conditional Probability, Naive Bayes derivation, denominator cancellation proof, Laplace +1 smoothing, and language identification.",
    "sections": [
      {
        "id": "bow_fundamentals",
        "title": "3.1 Bag of Words (BoW) Mechanics & Vector Space",
        "simple": "<b>Bag of Words (BoW)</b> turns text into numbers for computers. It counts how many times each word from a master vocabulary appears in a sentence, while throwing away word order and grammar (like dumping words into a bag). Each sentence becomes a list of counts (a vector).",
        "deepDive": "<b>Technical Formulation:</b> BoW represents text documents as fixed-length numeric vectors in a high-dimensional vector space $\\mathbb{R}^{|V|}$, where $|V|$ is the size of the predefined vocabulary.<br><br><b>Processing Steps:</b><ol><li><b>Text Normalization:</b> Lowercasing and tokenization.</li><li><b>Vocabulary Construction:</b> Unique tokens extracted, sorted (typically alphabetically), and indexed from $1$ to $|V|$.</li><li><b>Vectorization:</b> For any input document $D$, its vector $\\vec{v} = [c_1, c_2, \\dots, c_{|V|}]$ where $c_i$ is the occurrence frequency of vocabulary word $w_i$ in $D$.</li><li><b>Inherent Limitations:</b> Discards syntactic word order, ignores grammar, creates sparse matrices, and suffers from the curse of dimensionality.</li></ol>"
      },
      {
        "id": "slu_bow_exercise",
        "title": "3.2 The SLU Panatang Makabayan BoW Case Study",
        "simple": "In our class exercise, we took the <i>Panatang Makabayan</i> text and built a 44-word vocabulary. Then we removed <b>7 stopwords</b> (<i>ang, at, ko, mga, nang, ng, sa</i>), reducing the vocabulary size down to <b>37 words</b>. Words are re-indexed alphabetically, so <i>aking</i> is Index 1 (count 4) and <i>Pilipinas</i> is Index 30 (count 3).",
        "deepDive": "<b>Step-by-Step Breakdown of the CSE 30 Exercise:</b><br><br><b>Part 1: 44-Word Original Vocabulary:</b><br>Derived from lowercasing the Panatang Makabayan pledge (total 64 tokens across 44 unique vocabulary words).<br>Vector for the opening clause <i>'Iniibig ko ang Pilipinas'</i>:<ul><li>Index 3 (ang): count 1</li><li>Index 11 (iniibig): count 1</li><li>Index 15 (ko): count 1</li><li>Index 36 (Pilipinas): count 1</li><li>All other 40 dimensions are 0. Vector has 44 dimensions.</li></ul><br><b>Part 2: Full Text 44-Dimensional Vector:</b><br>Non-unit frequencies: <code>aking</code> (idx 1) = 4, <code>ang</code> (idx 3) = 6, <code>at</code> (idx 4) = 3, <code>ko</code> (idx 15) = 6, <code>ng</code> (idx 31) = 4, <code>Pilipinas</code> (idx 36) = 3. All other 38 vocabulary words appear exactly once.<br><br><b>Part 3: Stopword Removal & Dimensionality Reduction:</b><br>The 7 designated stopwords are removed: <code>{'ang', 'at', 'ko', 'mga', 'nang', 'ng', 'sa'}</code>.<br>Dimensionality drops: $|V| = 44 - 7 = \\mathbf{37\\text{ dimensions}}$.<br><br><b>Part 4: Re-Indexed 37-Word Vocabulary:</b><br>Remaining 37 words are sorted alphabetically and re-indexed 1 to 37:<ul><li><b>Index 1:</b> <code>aking</code> (count: 4)</li><li><b>Index 30:</b> <code>Pilipinas</code> (count: 3)</li><li>All remaining 35 words have count: 1</li><li>Resulting 37-D Vector: <code>[4, 1, 1, 1, ..., 3, 1, 1, 1, 1, 1, 1, 1]</code></li></ul><br><b>Part 5: Vector Inversion:</b><br>The sparse 37-D vector with 1s at Index 9 (<code>iniibig</code>) and Index 30 (<code>Pilipinas</code>) inverts back to the original clause <i>'Iniibig ko ang Pilipinas'</i> (which becomes <i>'Iniibig Pilipinas'</i> after stopword removal)."
      },
      {
        "id": "conditional_probability_bayes",
        "title": "3.3 Conditional Probability & Bayes' Theorem",
        "simple": "<b>Conditional probability</b> $P(A|B)$ is the chance of $A$ happening given that $B$ already happened: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$. <b>Bayes' Rule</b> lets us flip conditional probabilities around: $P(C|X) = \\frac{P(X|C)P(C)}{P(X)}$.",
        "deepDive": "<b>Mathematical Definitions (Presentation 3, Slides 5-20):</b><br>$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$<br><b>Slide 16-18 Worked School Demographics Problem:</b><br>Given 100 school members (60 Male, 40 Female; 80 Students, 20 Teachers/Staff). Total Female Students = 32.<br>What is the probability a member is Female given they are a Student?<br>$$P(\\text{Female} | \\text{Student}) = \\frac{P(\\text{Female} \\cap \\text{Student})}{P(\\text{Student})} = \\frac{32/100}{80/100} = \\frac{32}{80} = 0.40\\text{ (or }2/5\\text{)}$$<br><b>Bayes' Rule:</b><br>$$P(Y|X) = \\frac{P(X|Y) \\cdot P(Y)}{P(X)}$$<br>Where $P(Y|X)$ is the posterior probability, $P(X|Y)$ is the likelihood, $P(Y)$ is the prior probability, and $P(X)$ is the marginal probability of the evidence."
      },
      {
        "id": "naive_bayes_formula_cancellation",
        "title": "3.4 Naive Bayes Assumption & Denominator Cancellation",
        "simple": "Naive Bayes assumes all words in a sentence are independent of each other (which is 'naive' because grammar links words, but it works surprisingly well in practice!).<br><br><b>Why drop the denominator?</b> When deciding which category wins, the denominator $P(X)$ is identical for every single candidate class! Since it doesn't change who wins, we can discard it completely to simplify math.",
        "deepDive": "<b>The Naive Bayes Conditional Independence Assumption:</b><br>Assumes that each feature $X_i$ is conditionally independent of any other feature $X_j$ given category $C$:<br>$$P(X_1, X_2, \\dots, X_n | C) = \\prod_{i=1}^n P(X_i | C)$$<br><b>The Classification Formulation:</b><br>$$P(C | X_1, \\dots, X_n) = \\frac{P(C) \\prod_{i=1}^n P(X_i | C)}{P(X_1, \\dots, X_n)}$$<br><b>The Crucial Denominator Cancellation (Slides 45 & 74-79):</b><br>Because the denominator $P(X_1, \\dots, X_n)$ is completely independent of the category $C$ and identical across all candidate classes, it functions as a constant normalizing factor. Thus, when solving for the most probable class $\\hat{C}$ via the <i>argmax</i> function, the denominator is discarded:<br>$$\\hat{C} = \\arg\\max_{C \\in \\Gamma} \\left[ P(C) \\prod_{i=1}^n P(X_i | C) \\right]$$<br>This drastically reduces computational complexity without altering the ranking."
      },
      {
        "id": "language_identification_laplace",
        "title": "3.5 Language Identification & Laplace (+1) Smoothing",
        "simple": "We can identify whether a sentence is Tagalog, Ilocano, or Bikol by multiplying word probabilities for each language and picking the highest score (Argmax). If a sentence has a new word never seen before, its probability would be 0, which would multiply and ruin the entire score! To fix this, we use <b>Laplace (+1) Smoothing</b> by adding 1 to all word counts so nothing ever equals zero.",
        "deepDive": "<b>Multinomial Naive Bayes for Language Identification (Slides 47-79):</b><br>Given text $X = (w_1, w_2, \\dots, w_n)$ and target Philippine languages $\\Gamma = \\{\\text{Bikol, Cebuano, Hiligaynon, Ilocano, Kapampangan, Pangasinan, Tagalog, Waray}\\}$:<br>$$\\hat{L} = \\arg\\max_{L \\in \\Gamma} \\left[ P(L) \\times P(w_1|L) \\times P(w_2|L) \\times \\dots \\times P(w_n|L) \\right]$$<br><i>Worked Example from Slide 76:</i><br>$$P(\\text{Ilocano} | \\text{'naimbag', 'nga', 'rabii'}) \\propto P(\\text{Ilocano}) \\times P(\\text{'naimbag'}|\\text{Ilocano}) \\times P(\\text{'nga'}|\\text{Ilocano}) \\times P(\\text{'rabii'}|\\text{Ilocano})$$<br><br><b>Laplace (+1) Smoothing (Slide 66):</b><br>If a word $w_k$ is unseen in language $L$, $P(w_k|L) = 0$, causing the entire product $\\prod P(w_i|L) = 0$ regardless of other strong evidence.<br><i>Solution:</i> Add $1$ to the numerator and adjust the denominator by vocabulary size $|V|$:$$P_{\\text{Laplace}}(w|C) = \\frac{\\text{Count}(w, C) + 1}{\\sum_{w'} \\text{Count}(w', C) + |V|}$$Slide 66 also introduces an explicit <code>'Others'</code> category with frequency count 1 to handle out-of-vocabulary terms.<br><br><b>N-grams in Language Modeling:</b> Unigram ($n=1$), Bigram ($n=2$), Trigram ($n=3$). Can be character n-grams (slices of words) or word n-grams (slices of sentences)."
      }
    ]
  }
];
const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "category": "domain1",
    "question": "Which of the following best defines a 'Morpheme' in linguistic analysis?",
    "options": [
      "The smallest unit of speech sound without inherent meaning",
      "The basic building block of words, carrying grammatical or lexical meaning",
      "A full dictionary entry comprising all its inflections",
      "A sequence of words that functions as a single syntactic sentence"
    ],
    "answer": 1,
    "simpleExplanation": "A morpheme is the smallest meaningful unit in a language (like prefixes, suffixes, or root words).",
    "deepDive": "Presentation 2, Slide 7 defines a Morpheme as the basic building block of words, categorized into lexical (content-bearing) and functional (grammatical) morphemes.",
    "googleQuery": "morpheme definition linguistics"
  },
  {
    "id": 2,
    "category": "domain1",
    "question": "In NLP, what is a 'Paradigm'?",
    "options": [
      "The indivisible root morpheme of a sentence",
      "The full set of words realizing a particular lexeme",
      "A set of rules for converting speech to text",
      "The highest frequency POS tag in a corpus"
    ],
    "answer": 1,
    "simpleExplanation": "A paradigm is the entire set of inflected word forms that belong to a single dictionary word (lexeme).",
    "deepDive": "Presentation 2, Slide 9 states: 'In the context of NLP, PARADIGM is the full set of words realizing a particular lexeme', e.g. {cantare', sing, sang, sung, sings, singing} for the lexeme SING.",
    "googleQuery": "inflectional paradigm morphology"
  },
  {
    "id": 3,
    "category": "domain1",
    "question": "Which statement accurately describes the 'Closure Principle' in morphology?",
    "options": [
      "Derivation closes words for further derivation, while inflection does not.",
      "Inflection closes words for further derivation, while derivation does not.",
      "Compounding closes words for any form of affixation.",
      "Incorporation prevents the addition of clitics."
    ],
    "answer": 1,
    "simpleExplanation": "Inflection shuts the door! Once you add an inflectional ending (like -ed or -s), you cannot add more derivational affixes.",
    "deepDive": "Presentation 2, Slide 15 explicitly highlights: 'Closure Principle in Morphology: Inflection closes words for further derivation, while derivation does not.'",
    "googleQuery": "closure principle morphology inflection derivation"
  },
  {
    "id": 4,
    "category": "domain1",
    "question": "Forming the adjective 'malicious' from the noun 'malice' is an example of which morphological phenomenon?",
    "options": [
      "Inflection",
      "Derivation",
      "Incorporation",
      "Cliticization"
    ],
    "answer": 1,
    "simpleExplanation": "It's derivation because it changes the word from a noun to an adjective.",
    "deepDive": "Presentation 2, Slide 13 gives this exact example: 'Forming the adjective malicious from the noun malice is an example of a derivation' because it changes syntactic classification.",
    "googleQuery": "derivation vs inflection examples"
  },
  {
    "id": 5,
    "category": "domain1",
    "question": "Generating 'talked' from the present tense verb 'talk' is an example of:",
    "options": [
      "Derivation",
      "Compounding",
      "Inflection",
      "Incorporation"
    ],
    "answer": 2,
    "simpleExplanation": "Both 'talk' and 'talked' are verbs; it only modified the grammatical tense, so it is inflection.",
    "deepDive": "Presentation 2, Slide 12 explains that inflection occurs when the resulting word retains the same syntactic classification (POS) as the root (e.g. talk and talked are both verbs).",
    "googleQuery": "inflectional morphology verbs"
  },
  {
    "id": 6,
    "category": "domain1",
    "question": "The Kankanaey word 'kinanko' (meaning 'I ate it'), formed by concatenating 'kinan' (ate) and 'ko' (I), illustrates:",
    "options": [
      "Incorporation",
      "Replacive affixation",
      "Supervised parsing",
      "Static masking"
    ],
    "answer": 0,
    "simpleExplanation": "Incorporation happens when a verb is fused together with an object or pronoun into a single word.",
    "deepDive": "Presentation 2, Slide 16 defines Incorporation as concatenating a verb with a noun/pronoun/adverb to realize combined syntactic function, using 'kinanko' as the primary example.",
    "googleQuery": "noun incorporation linguistics"
  },
  {
    "id": 7,
    "category": "domain1",
    "question": "Which of the following contains an example of an Enclitic / Clitic?",
    "options": [
      "The prefix 'un-' in 'unhappy'",
      "The contracted ''m' in 'I'm' and 'n't' in 'don't'",
      "The suffix '-tion' in 'education'",
      "The compound 'Green House'"
    ],
    "answer": 1,
    "simpleExplanation": "Clitics are little grammatical words that cannot stand on their own phonologically and latch onto host words, like 'm in I'm.",
    "deepDive": "Presentation 2, Slide 17 lists examples of Clitics: 'm in I'm, 's in he's, and n't in don't, as well as the elision in Kankanaey 'edwani'.",
    "googleQuery": "clitics enclitics english linguistics"
  },
  {
    "id": 8,
    "category": "domain1",
    "question": "In Dalos Miguel's Kankanaey study (2009), the root noun 'gabyon' (hoe) is notable because it serves as a repository for approximately:",
    "options": [
      "5 words",
      "15 words",
      "Over 50 words",
      "Exactly 500 words"
    ],
    "answer": 2,
    "simpleExplanation": "In Kankanaey, the single root word 'gabyon' can produce about 50 different words through various affixes and compounding.",
    "deepDive": "Presentation 2, Slide 21 explicitly notes: 'For example, the word \"gabyon\"... is a repository of about 50 words.'",
    "googleQuery": "Kankanaey morphology Dalos Miguel"
  },
  {
    "id": 9,
    "category": "domain1",
    "question": "From the Kankanaey root 'ali' (to come), which word form functions as a simple past tense verb meaning 'came'?",
    "options": [
      "Inmali",
      "Umal-ali",
      "Kaali",
      "Makiali"
    ],
    "answer": 0,
    "simpleExplanation": "'Inmali' is simple past ('came'), while 'umal-ali' is continuous ('coming') and 'makiali' is companion future.",
    "deepDive": "Presentation 2, Slide 25 image table: 'Inmali' = verb-simple past ('Came'); 'inmal-ali' = verb-past perfect ('had come'); 'kaali' = adjective ('came immediately').",
    "googleQuery": "kankanaey verb affixes ali"
  },
  {
    "id": 10,
    "category": "domain1",
    "question": "Which of the following describes the task of Co-reference Resolution in NLP?",
    "options": [
      "Translating sentences between two distinct natural languages",
      "Determining which words or expressions in a text refer to the exact same real-world entity",
      "Extracting optical text characters from low-resolution images",
      "Splitting words into root and inflectional affixes"
    ],
    "answer": 1,
    "simpleExplanation": "Co-reference resolution figures out when different words (like 'Dr. Jose Rizal' and 'he') are talking about the exact same person or thing.",
    "deepDive": "Presentation 1, Slide 26 defines co-reference resolution as determining which words in a sentence or large text refer to the same object.",
    "googleQuery": "coreference resolution NLP"
  },
  {
    "id": 11,
    "category": "domain1",
    "question": "How many POS tags are defined in the original Tagalog tagset by Rabo (2004) versus the revised tagset by Dr. Buban?",
    "options": [
      "36 tags (Rabo) vs 48 tags (Buban)",
      "59 tags (Rabo) vs 65 tags (Buban)",
      "100 tags (Rabo) vs 120 tags (Buban)",
      "20 tags (Rabo) vs 25 tags (Buban)"
    ],
    "answer": 1,
    "simpleExplanation": "Rabo's 2004 Tagalog tagset has 59 tags, while Dr. Buban's revised Tagalog tagset expanded it to 65 tags.",
    "deepDive": "Presentation 1, Slide 41: 'Tagalog tagset by Rabo (2004) - 59 tags; Revised Tagalog tagset by Dr. Buban - 65 tags.'",
    "googleQuery": "Tagalog POS tagset Rabo Buban"
  },
  {
    "id": 12,
    "category": "domain1",
    "question": "In probabilistic POS tagging using Hidden Markov Models (HMM), the probability P(wi | ti) is known as the:",
    "options": [
      "Contextual / Transition probability",
      "Lexical / Emission probability",
      "Prior probability",
      "Closure probability"
    ],
    "answer": 1,
    "simpleExplanation": "P(word | tag) is the emission or lexical probability: the likelihood that a specific tag emits that specific word.",
    "deepDive": "Presentation 1, Slides 53-55: Lexical probability represents P(w|t) while contextual/transition probability represents P(t_i | t_{i-1}).",
    "googleQuery": "HMM POS tagging lexical emission transition probability"
  },
  {
    "id": 13,
    "category": "domain1",
    "question": "Which POS tag was found to have the HIGHEST frequency in the annotated Tagalog corpora discussed in class?",
    "options": [
      "VBOI",
      "NNC (Common Noun)",
      "PRF",
      "CCB"
    ],
    "answer": 1,
    "simpleExplanation": "NNC (Common Noun) is by far the most frequent tag in Tagalog corpora, and is also the default assigned to unknown words.",
    "deepDive": "Presentation 1, Slide 62 & 63: 'Highest frequency tag: NNC'; and Slide 63 lists NNC as the first tag with greatest occurrence for unknown words. VBOI is least frequent / zero.",
    "googleQuery": "Tagalog corpus POS tag frequency NNC"
  },
  {
    "id": 14,
    "category": "domain1",
    "question": "Which of the following is considered a factor that can adversely affect the validity of an annotated corpus?",
    "options": [
      "Abbreviations ending with periods being mistaken for sentence delimiters",
      "Using utf-8 encoding for text files",
      "Having a balanced ratio of nouns and verbs",
      "Applying the Markov assumption"
    ],
    "answer": 0,
    "simpleExplanation": "When abbreviations like 'Dr.' or 'e.g.' have periods, systems might mistakenly think the sentence ended there.",
    "deepDive": "Presentation 1, Slide 61 lists factors affecting validity of annotated corpora: Sentence delimiters (period, ?, !), double quotes, ellipses, and abbreviation with periods.",
    "googleQuery": "sentence boundary disambiguation abbreviations corpus validity"
  },
  {
    "id": 15,
    "category": "domain1",
    "question": "What is the Error Rate metric in NLP evaluation?",
    "options": [
      "The ratio of True Positives to False Positives",
      "The complement of Accuracy (1 - Accuracy)",
      "The harmonic mean of Precision and Recall",
      "The execution time per tagged token"
    ],
    "answer": 1,
    "simpleExplanation": "Error Rate is simply the opposite of accuracy: 1 minus Accuracy.",
    "deepDive": "Presentation 1, Slide 59 explicitly defines 'Error rates: Complement of Accuracy' (Error Rate = 1 - Accuracy = (FP + FN) / Total).",
    "googleQuery": "error rate complement of accuracy"
  },
  {
    "id": 16,
    "category": "domain2",
    "question": "What primary research motivation led Dalos Miguel et al. to develop the Cloud-Based RoBERTa tool for HEIs?",
    "options": [
      "To replace human professors with automated AI grading agents",
      "To overcome slow, subjective manual evaluation and combat 'SDG-washing' in university reports",
      "To translate Cordilleran indigenous folklore into Spanish",
      "To eliminate the use of Google Cloud Platform in Philippine colleges"
    ],
    "answer": 1,
    "simpleExplanation": "Evaluating sustainability by hand is slow and biased, and universities often make exaggerated green claims (SDG-washing).",
    "deepDive": "Research Paper Abstract & Section 1: HEI sustainability reporting suffers from inconsistencies, high manual review volume, and the threat of 'SDG-washing' (superficial green claims without measurable proof).",
    "googleQuery": "SDG-washing higher education institutions NLP"
  },
  {
    "id": 17,
    "category": "domain2",
    "question": "What major limitation of the existing STARS (Sustainability Tracking, Assessment & Rating System) was highlighted in the study?",
    "options": [
      "It only works on iOS mobile devices",
      "It measures broad sustainability but lacks fine-grained, individual SDG mapping",
      "It is restricted solely to European primary schools",
      "It cannot read digital PDF files"
    ],
    "answer": 1,
    "simpleExplanation": "STARS only gives a general overall sustainability score; it cannot map text to each of the 17 individual SDGs.",
    "deepDive": "NLP-Presentation Slide 3 & Paper Section 1: 'Systems like STARS measure broad sustainability but lack fine-grained, individual SDG mapping, limiting meaningful benchmarking.'",
    "googleQuery": "STARS sustainability tracking limitations individual SDG mapping"
  },
  {
    "id": 18,
    "category": "domain2",
    "question": "How many institutional documents were collected, and from how many Philippine HEIs, in the RoBERTa SDG study?",
    "options": [
      "100 documents from 3 HEIs",
      "748 documents from 15 HEIs",
      "5,000 documents from 50 HEIs",
      "74 documents from 1 HEI"
    ],
    "answer": 1,
    "simpleExplanation": "The dataset consisted of 748 documents collected across 15 Philippine higher education institutions.",
    "deepDive": "NLP-Presentation Slide 6 & Paper Section 2.1: '748 documents collected from 15 Philippine HEIs' across sustainability reports, strategic plans, and policies.",
    "googleQuery": "Philippine HEI SDG classification 748 documents"
  },
  {
    "id": 19,
    "category": "domain2",
    "question": "Why did the researchers use 'Multi-Hot Vector Encoding' rather than standard single-label classification for the SDGs?",
    "options": [
      "Because multi-hot encoding automatically removes stopwords",
      "Because an institutional document or policy can align with multiple SDGs simultaneously",
      "Because PyTorch only supports multi-hot vectors",
      "Because multi-hot encoding compresses text into 37 dimensions"
    ],
    "answer": 1,
    "simpleExplanation": "A single university project or paper can hit multiple goals at once (e.g. poverty AND clean water), so it needs multi-label (multi-hot) tags.",
    "deepDive": "NLP-Presentation Slide 6: 'Labels annotated per SDG using multi-hot vector encoding (documents can align with multiple SDGs).'",
    "googleQuery": "multihot vector encoding multilabel text classification"
  },
  {
    "id": 20,
    "category": "domain2",
    "question": "What is 'LexDG' and why was it specifically developed for this Philippine study?",
    "options": [
      "A cloud database for storing student grades",
      "A custom domain-specific lexicon incorporating regional/indigenous terms (e.g. Ilocano) to preserve local context",
      "A replacement for Python's NLTK tokenizer",
      "A hardware GPU accelerator provided by Google Cloud"
    ],
    "answer": 1,
    "simpleExplanation": "LexDG is a specialized dictionary of regional Philippine words (like Ilocano) so the AI doesn't misinterpret local terms.",
    "deepDive": "Paper Section 3.2 & Presentation Slide 7: 'LexDG lexicon developed for regional/indigenous terms (e.g., Ilocano) to preserve local context' in Philippine HEI reports.",
    "googleQuery": "domain-specific lexicon regional terms text classification"
  },
  {
    "id": 21,
    "category": "domain2",
    "question": "Which of the following correctly describes the masking strategy difference between BERT and RoBERTa?",
    "options": [
      "BERT uses dynamic masking; RoBERTa uses static masking",
      "BERT uses static masking (masked once beforehand); RoBERTa uses dynamic masking (masked randomly on-the-fly during training)",
      "Neither model uses masking",
      "Both models mask 100% of input tokens simultaneously"
    ],
    "answer": 1,
    "simpleExplanation": "BERT masks words once before training (static), whereas RoBERTa dynamically masks different words in every training epoch.",
    "deepDive": "Presentation Slide 8 & Paper Section 1.1: BERT uses Static Masking (words masked once during preprocessing), whereas RoBERTa uses Dynamic Masking (words masked randomly on the fly during training).",
    "googleQuery": "BERT static masking vs RoBERTa dynamic masking"
  },
  {
    "id": 22,
    "category": "domain2",
    "question": "What did RoBERTa do with the 'Next Sentence Prediction' (NSP) task used in original BERT?",
    "options": [
      "Increased its training weight tenfold",
      "Removed it entirely, because eliminating NSP improves downstream task performance",
      "Replaced it with Part-of-Speech tagging",
      "Used it exclusively on testing splits"
    ],
    "answer": 1,
    "simpleExplanation": "RoBERTa completely removed Next Sentence Prediction because researchers found it actually harmed classification performance.",
    "deepDive": "Presentation Slide 8: Under RoBERTa, NSP is 'No (Removed entirely since it affects the downstream performance)'. Liu et al. (2019) showed removing NSP matches or slightly improves performance.",
    "googleQuery": "RoBERTa removed next sentence prediction NSP"
  },
  {
    "id": 23,
    "category": "domain2",
    "question": "What tokenizer type and vocabulary size are utilized by RoBERTa compared to BERT?",
    "options": [
      "BERT: WordPiece (30k tokens); RoBERTa: Byte-level Byte-Pair Encoding (50k tokens)",
      "BERT: BPE (50k tokens); RoBERTa: WordPiece (30k tokens)",
      "BERT: Character unigram (1k tokens); RoBERTa: Word n-gram (100k tokens)",
      "Both use identical 30,000 WordPiece tokenizers"
    ],
    "answer": 0,
    "simpleExplanation": "BERT uses WordPiece with 30,000 tokens, while RoBERTa uses a larger 50,000 token Byte-level BPE tokenizer.",
    "deepDive": "Presentation Slide 8: BERT uses WordPiece (Vocabulary size: 30,000 tokens) while RoBERTa uses Byte-level Byte-Pair Encoding / BPE (Vocabulary size: 50,000 tokens).",
    "googleQuery": "RoBERTa byte-level BPE vs BERT WordPiece"
  },
  {
    "id": 24,
    "category": "domain2",
    "question": "What overall Weighted Accuracy and Micro-F1 Score did the fine-tuned RoBERTa model achieve in the study?",
    "options": [
      "70.0% Accuracy, 0.50 F1",
      "96.77% Weighted Accuracy, 0.74 Micro-F1",
      "81.0% Accuracy, 0.64 F1",
      "100% Accuracy, 1.00 F1"
    ],
    "answer": 1,
    "simpleExplanation": "The fine-tuned RoBERTa model reached 96.77% accuracy and a 0.74 Micro-F1 score.",
    "deepDive": "Presentation Slide 12 & Paper Section 3.3: 'Weighted Accuracy: 96.77%', 'Micro-Precision: 0.80, Micro-Recall: 0.70, Micro-F1 Score: 0.74'.",
    "googleQuery": "RoBERTa SDG classification SLU 96.77%"
  },
  {
    "id": 25,
    "category": "domain2",
    "question": "In the ablation study, what happened to the RoBERTa model's F1-score when 'LexDG' was removed?",
    "options": [
      "It increased from 0.74 to 0.85",
      "It stayed exactly the same",
      "It dropped from 0.74 to 0.68",
      "It dropped to zero"
    ],
    "answer": 2,
    "simpleExplanation": "Without the regional dictionary (LexDG), the F1-score dropped from 0.74 down to 0.68, showing how vital local terms are.",
    "deepDive": "Presentation Slide 12: 'The LexDG Factor (Ablation Study): When tested without the custom localized lexicon (LexDG), the model's F1-score dropped from 0.74 to 0.68.'",
    "googleQuery": "ablation study lexicon impact F1 score drop"
  },
  {
    "id": 26,
    "category": "domain2",
    "question": "Which cloud infrastructure stack was used to deploy the real-time institutional evaluation system?",
    "options": [
      "Amazon Web Services (AWS) Lambda and DynamoDB",
      "Google Cloud Platform (Vertex AI, Firestore) with Flask and Node.js",
      "Microsoft Azure Cognitive Services only",
      "Local Raspberry Pi cluster"
    ],
    "answer": 1,
    "simpleExplanation": "It was deployed on Google Cloud (Vertex AI for AI inference and Firestore for database storage), with Flask and Node.js.",
    "deepDive": "Presentation Slide 5 & 13: Google Cloud Platform (Vertex AI and Firestore), with Flask RESTful API and Node.js web application environment.",
    "googleQuery": "Google Cloud Vertex AI Firestore NLP deployment"
  },
  {
    "id": 27,
    "category": "domain2",
    "question": "What is the estimated monthly cloud operational cost of the deployed SDG assessment system?",
    "options": [
      "\u20b1500 \u2013 \u20b11,000 / month",
      "\u20b12,700 \u2013 \u20b18,300 / month",
      "\u20b150,000 \u2013 \u20b1100,000 / month",
      "Completely free with zero operational costs"
    ],
    "answer": 1,
    "simpleExplanation": "The estimated monthly cloud cost on GCP is between \u20b12,700 and \u20b18,300.",
    "deepDive": "Presentation Slide 13 explicitly states: 'providing a scalable and cost-effective solution (estimated at \u20b12,700\u2013\u20b18,300/month)'.",
    "googleQuery": "GCP Vertex AI Firestore cost monthly Philippine peso"
  },
  {
    "id": 28,
    "category": "domain2",
    "question": "Why did the RoBERTa model occasionally misclassify SDG 2 (Zero Hunger) as SDG 13 (Climate Action)?",
    "options": [
      "Due to an accidental bug in Python's random number generator",
      "Due to semantic category overlap, as both goals share agricultural and environmental sustainability terms",
      "Because SDG 2 was excluded from the training dataset",
      "Because RoBERTa does not support multi-label classification"
    ],
    "answer": 1,
    "simpleExplanation": "Both Zero Hunger and Climate Action talk heavily about farming, crops, and weather, creating semantic overlap.",
    "deepDive": "Presentation Slide 13: 'Challenge 1 - Category Overlap: The model occasionally struggled with semantically similar goals, such as misclassifying SDG 2 (Zero Hunger) and SDG 13 (Climate Action) because they share terms like \"agriculture\" and \"sustainability\".'",
    "googleQuery": "SDG 2 Zero Hunger and SDG 13 Climate Action semantic overlap"
  },
  {
    "id": 29,
    "category": "domain3",
    "question": "What is a primary characteristic of the standard Bag of Words (BoW) model?",
    "options": [
      "It strictly preserves sequential word order and sentence grammar",
      "It represents text as word frequency counts while completely disregarding grammar and word order",
      "It computes dense continuous word vectors using deep neural attention",
      "It requires all sentences to be exactly 100 characters long"
    ],
    "answer": 1,
    "simpleExplanation": "Bag of Words only cares about how many times each word appears; it ignores word order and grammar completely.",
    "deepDive": "Bag of Words Exercise & Presentation 3: BoW is a bag where word order is discarded and documents are characterized strictly by token frequency counts against a dictionary.",
    "googleQuery": "bag of words model characteristics NLP"
  },
  {
    "id": 30,
    "category": "domain3",
    "question": "In the SLU Panatang Makabayan exercise, how many words comprised the initial vocabulary derived after lowercasing?",
    "options": [
      "20 words",
      "37 words",
      "44 words",
      "64 words"
    ],
    "answer": 2,
    "simpleExplanation": "The original vocabulary had 44 unique words before any stopwords were removed.",
    "deepDive": "BagOfWordExercise.pdf Page 1 lists the vocabulary indexed from 1 ('aking') to 44 ('Tutuparin'). The total token count was 64, but unique vocabulary was 44.",
    "googleQuery": "Panatang Makabayan Bag of words 44 vocabulary"
  },
  {
    "id": 31,
    "category": "domain3",
    "question": "In Question 1 of the BoW exercise, what text corresponds to the 44-D vector with 1s at Index 3, 11, 15, and 36?",
    "options": [
      "\"Naglilingkod nang buong katapatan\"",
      "\"Iniibig ko ang Pilipinas\"",
      "\"Tutuparin ko ang mga tungkulin\"",
      "\"Aking lupang sinilangan\""
    ],
    "answer": 1,
    "simpleExplanation": "Index 3 is 'ang', 11 is 'iniibig', 15 is 'ko', and 36 is 'Pilipinas', which forms 'Iniibig ko ang Pilipinas'.",
    "deepDive": "BagOfWordExercise.pdf Question 1: Index 3 ('ang'), Index 11 ('iniibig'), Index 15 ('ko'), and Index 36 ('Pilipinas') reconstructs the text 'Iniibig ko ang Pilipinas'.",
    "googleQuery": "Iniibig ko ang Pilipinas bag of words vector"
  },
  {
    "id": 32,
    "category": "domain3",
    "question": "In Question 3 of the BoW exercise, which 7 words were designated as stopwords for removal?",
    "options": [
      "ako, buhay, dahil, mahal, payo, paaralan, tahanan",
      "ang, at, ko, mga, nang, ng, sa",
      "aking, isang, mamamayang, marangal, masipag, pangarap, Pilipinas",
      "kinukupkop, nag-aaral, nagdarasal, naglilingkod, susundin, tutuparin, iaalay"
    ],
    "answer": 1,
    "simpleExplanation": "The 7 stopwords removed were: ang, at, ko, mga, nang, ng, sa.",
    "deepDive": "BagOfWordExercise.pdf Page 2, Question 3: 'Suppose \"ang\", \"at\", \"ko\", \"mga\", \"nang\", \"ng\", and \"sa\" are stopwords and that stopword removal is applied...'",
    "googleQuery": "Filipino stopwords ang at ko mga nang ng sa"
  },
  {
    "id": 33,
    "category": "domain3",
    "question": "After removing the 7 stopwords from the 44-word vocabulary, what is the dimension of the resulting BoW vector?",
    "options": [
      "51 dimensions",
      "44 dimensions",
      "37 dimensions",
      "30 dimensions"
    ],
    "answer": 2,
    "simpleExplanation": "44 original words minus 7 stopwords leaves exactly 37 dimensions.",
    "deepDive": "BagOfWordExercise.pdf Question 3, Step 2: 'Original vocabulary size: 44. Subtracting 7 stopwords leaves 44 - 7 = 37 words. Hence, the resulting vector has exactly 37 dimensions.'",
    "googleQuery": "dimensionality reduction stopword removal 44 to 37"
  },
  {
    "id": 34,
    "category": "domain3",
    "question": "In the post-stopword 37-dimensional vocabulary, which word is at Index 1 and what is its frequency count in the text?",
    "options": [
      "Word: 'ako', Count: 1",
      "Word: 'aking', Count: 4",
      "Word: 'Pilipinas', Count: 3",
      "Word: 'tahanan', Count: 2"
    ],
    "answer": 1,
    "simpleExplanation": "'aking' is alphabetically first (Index 1) and appears 4 times in the pledge.",
    "deepDive": "BagOfWordExercise.pdf Question 3 table: Index 1 is 'aking' with count 4. Index 30 is 'Pilipinas' with count 3. All other 35 words have count 1.",
    "googleQuery": "aking frequency count Panatang Makabayan 4"
  },
  {
    "id": 35,
    "category": "domain3",
    "question": "In the 37-dimensional filtered vocabulary, which text corresponds to the vector with 1s at Index 9 and Index 30?",
    "options": [
      "\"Aking Pilipinas\"",
      "\"Iniibig ko ang Pilipinas\" (or post-stopword \"Iniibig Pilipinas\")",
      "\"Buhay pangarap\"",
      "\"Lupang sinilangan\""
    ],
    "answer": 1,
    "simpleExplanation": "In the 37-word list, Index 9 is 'iniibig' and Index 30 is 'Pilipinas'. Since 'ko' and 'ang' were removed as stopwords, this represents 'Iniibig ko ang Pilipinas'.",
    "deepDive": "BagOfWordExercise.pdf Question 4: Index 9 is 'iniibig' and Index 30 is 'Pilipinas'. With stopwords removed, it maps to 'Iniibig ko ang Pilipinas'.",
    "googleQuery": "Iniibig Pilipinas vector stopword removal"
  },
  {
    "id": 36,
    "category": "domain3",
    "question": "Given 100 school members (80 students, 20 teachers), with 32 female students, what is P(Female | Student)?",
    "options": [
      "0.32",
      "0.40 (or 2/5)",
      "0.80",
      "0.50"
    ],
    "answer": 1,
    "simpleExplanation": "P(Female | Student) = P(Female and Student) / P(Student) = (32/100) / (80/100) = 32 / 80 = 0.40.",
    "deepDive": "Presentation 3, Slides 16-18: P(Female|student) = P(Female \u2229 Student) / P(Student) = (32/100) / (80/100) = 32/80 = 2/5 = 0.40.",
    "googleQuery": "conditional probability female student 32 80"
  },
  {
    "id": 37,
    "category": "domain3",
    "question": "Why is the denominator P(X1, X2, ..., Xn) discarded when using Naive Bayes to classify a text into category C?",
    "options": [
      "Because the denominator is always equal to 1.0 in probability theory",
      "Because the denominator is identical for every candidate category C, so it does not affect argmax ranking",
      "Because dividing by floating-point numbers causes buffer overflow in Python",
      "Because the denominator represents the prior probability of the winning class"
    ],
    "answer": 1,
    "simpleExplanation": "The denominator is the exact same number for every class you test, so dividing by it doesn't change who wins!",
    "deepDive": "Presentation 3, Slides 45 & 74-79: 'Because the denominator of the formula for computing the probability of each category Y given features X1, X2, \u2026 Xn are the same for each Y, the denominator is discarded.'",
    "googleQuery": "naive bayes why drop denominator argmax"
  },
  {
    "id": 38,
    "category": "domain3",
    "question": "What is the core assumption of the Naive Bayes model that gives it the name 'Naive'?",
    "options": [
      "It assumes that all training documents have zero spelling errors",
      "It assumes that all features (words) are conditionally independent given the class label",
      "It assumes that all natural languages have exactly 37 letters",
      "It assumes neural network weights never change during backpropagation"
    ],
    "answer": 1,
    "simpleExplanation": "It's called 'naive' because it assumes words don't depend on each other at all once you know the topic/language.",
    "deepDive": "Presentation 3, Slide 23 & 63: Naive Bayes assumes conditional independence: P(X1, ..., Xn | C) = \u220f P(Xi | C).",
    "googleQuery": "conditional independence assumption naive bayes"
  },
  {
    "id": 39,
    "category": "domain3",
    "question": "What problem does Laplace (+1) Smoothing solve in Naive Bayes classification?",
    "options": [
      "It eliminates overfitting on small datasets",
      "It prevents zero probability when a test word never appeared in the training set for a category",
      "It converts non-English characters to ASCII",
      "It reduces the size of the vocabulary matrix by 50%"
    ],
    "answer": 1,
    "simpleExplanation": "If an unseen word has a probability of 0, multiplying by 0 wipes out the whole score. Adding 1 prevents this zero-probability disaster.",
    "deepDive": "Presentation 3, Slide 66: '+1 Smoothing: Add 1 to frequency count of all features. Consider \"Others\" with Frequency Count 1... so probabilities never drop to 0.'",
    "googleQuery": "laplace smoothing zero probability problem naive bayes"
  },
  {
    "id": 40,
    "category": "domain3",
    "question": "In the class workshop on Philippine language identification, which formula determines the winning language L for text X?",
    "options": [
      "L_hat = argmax_L [ P(L) * \u220f P(wi | L) ]",
      "L_hat = argmin_L [ P(L) / \u220f P(wi | L) ]",
      "L_hat = \u2211 [ P(wi | L) + P(L) ]",
      "L_hat = det(Matrix(X, L))"
    ],
    "answer": 0,
    "simpleExplanation": "Multiply the language prior P(L) by each word's likelihood P(wi|L), and pick whichever language gives the largest number (argmax).",
    "deepDive": "Presentation 3, Slides 56, 61, 65: \\hat{L} = \\arg\\max_{L \\in \\Gamma} [ P(L) \\prod_{i=1}^n P(w_i | L) ].",
    "googleQuery": "multinomial naive bayes language identification argmax"
  },
  {
    "id": 41,
    "category": "domain3",
    "question": "For the Ilocano phrase 'naimbag nga rabii', how does the simplified Naive Bayes formula compute its score for Ilocano?",
    "options": [
      "P('naimbag') + P('nga') + P('rabii')",
      "P('naimbag'|Ilocano) * P('nga'|Ilocano) * P('rabii'|Ilocano) * P(Ilocano)",
      "P(Ilocano) / [P('naimbag') * P('rabii')]",
      "Count('naimbag') + Count('nga') + Count('rabii')"
    ],
    "answer": 1,
    "simpleExplanation": "Multiply the prior P(Ilocano) by P(naimbag|Ilocano) * P(nga|Ilocano) * P(rabii|Ilocano).",
    "deepDive": "Presentation 3, Slide 76 explicitly shows: P(Ilocano | 'naimbag', 'nga', 'rabii') = P('naimbag'/Ilocano) * P('nga'/Ilocano) * P('rabii'/Ilocano) * P(Ilocano).",
    "googleQuery": "naimbag nga rabii naive bayes calculation"
  },
  {
    "id": 42,
    "category": "domain3",
    "question": "What is the difference between a character n-gram and a word n-gram?",
    "options": [
      "Character n-grams are only used in Python; word n-grams are used in C++",
      "A character n-gram is an n-character slice of a word; a word n-gram is an n-word slice of a sentence",
      "Character n-grams always have n=1; word n-grams always have n >= 5",
      "There is no difference; they are interchangeable terms"
    ],
    "answer": 1,
    "simpleExplanation": "Character n-grams chop up letters inside a word; word n-grams chop up words inside a sentence.",
    "deepDive": "Presentation 3, Slide 59: 'Word n-gram: n-word slice of a sentence (unigram: \"to\", bigram: \"to be\", trigram: \"to be or\"). Character n-gram: n-character slice of a word.'",
    "googleQuery": "character n-gram vs word n-gram NLP"
  },
  {
    "id": 43,
    "category": "domain1",
    "question": "Which of the following is an example of an enclitic in Filipino grammar?",
    "options": [
      "The prefix 'nag-' in 'naglalaro'",
      "Particles like 'pa', 'na', 'ba', and 'din'",
      "The root word 'bahay'",
      "The conjunction 'subalit'"
    ],
    "answer": 1,
    "simpleExplanation": "Filipino enclitic particles like 'pa', 'na', and 'ba' lean on the word before them for stress.",
    "deepDive": "Presentation 2, Slide 17 discusses clitics. In Philippine languages, particles such as 'ba', 'na', 'pa', and 'din' are classical enclitics.",
    "googleQuery": "Philippine enclitic particles ba na pa din"
  },
  {
    "id": 44,
    "category": "domain1",
    "question": "What is 'Morphological Segmentation' in NLP pipelines?",
    "options": [
      "Removing punctuation from a sentence",
      "Separating a word into its individual morphemes and identifying their classes",
      "Translating foreign idioms into English",
      "Grouping sentences into paragraphs"
    ],
    "answer": 1,
    "simpleExplanation": "It's chopping a word into its meaningful pieces (roots, prefixes, suffixes).",
    "deepDive": "Presentation 1, Slide 29: 'Morphological segmentation refers to separating a word into individual morphemes and identifying the class of the morphemes.'",
    "googleQuery": "morphological segmentation NLP definition"
  },
  {
    "id": 45,
    "category": "domain1",
    "question": "Which level of linguistic analysis is concerned with the study of speech sounds and phonemes?",
    "options": [
      "Semantics",
      "Phonology",
      "Pragmatics",
      "Syntax"
    ],
    "answer": 1,
    "simpleExplanation": "Phonology deals with speech sounds.",
    "deepDive": "Presentation 1, Slide 35: Terminologies in NLP list Phonology as the linguistic study of sounds, distinct from morphology, syntax, and semantics.",
    "googleQuery": "phonology definition linguistics"
  },
  {
    "id": 46,
    "category": "domain1",
    "question": "What does RAG stand for in modern Natural Language Processing?",
    "options": [
      "Recursive Autoregressive Grammar",
      "Retrieval-Augmented Generation",
      "Robust Automated Grading",
      "Random Affix Generator"
    ],
    "answer": 1,
    "simpleExplanation": "RAG stands for Retrieval-Augmented Generation (fetching facts from documents before generating an answer).",
    "deepDive": "Presentation 1, Slide 23 highlights 'Current Approach: Retrieval Augmented Generation (RAG)'.",
    "googleQuery": "Retrieval Augmented Generation RAG NLP"
  },
  {
    "id": 47,
    "category": "domain2",
    "question": "Which SDG recorded the HIGHEST individual F1-score (0.95) in the RoBERTa classification study?",
    "options": [
      "SDG 1 (No Poverty)",
      "SDG 2 (Zero Hunger)",
      "SDG 7 (Affordable and Clean Energy)",
      "SDG 13 (Climate Action)"
    ],
    "answer": 2,
    "simpleExplanation": "SDG 7 (Clean Energy) had the clearest distinct technical keywords, earning a 0.95 F1-score.",
    "deepDive": "Paper Section 3.3, Table: SDG 7 (Affordable and Clean Energy) achieved Precision: 0.94, Recall: 0.97, and F1-score: 0.95 (Accuracy: 0.9938).",
    "googleQuery": "SDG 7 clean energy highest F1 score RoBERTa"
  },
  {
    "id": 48,
    "category": "domain2",
    "question": "What method was used to address class imbalance among underrepresented SDGs in the training dataset?",
    "options": [
      "Dropping all minority classes",
      "Random Oversampling (duplicating minority SDG instances)",
      "Reducing model learning rate to zero",
      "Converting multi-hot vectors to single-hot vectors"
    ],
    "answer": 1,
    "simpleExplanation": "Random oversampling was used: making copies of documents in rare SDGs so the model sees them enough times.",
    "deepDive": "Presentation Slide 7: 'Class imbalance addressed via random oversampling (minority SDG classes duplicated to match majority).'",
    "googleQuery": "random oversampling class imbalance NLP"
  },
  {
    "id": 49,
    "category": "domain2",
    "question": "What OCR software library was used to extract text from scanned, non-editable institutional reports?",
    "options": [
      "BeautifulSoup",
      "Selenium",
      "Pytesseract",
      "NLTK"
    ],
    "answer": 2,
    "simpleExplanation": "Pytesseract was used for OCR to read scanned PDF pages.",
    "deepDive": "Presentation Slide 6: 'OCR (Pytesseract) used to extract text from scanned/image-based (non-editable) files.'",
    "googleQuery": "Pytesseract OCR PDF extraction"
  },
  {
    "id": 50,
    "category": "domain3",
    "question": "In Question 2 of the Bag of Words exercise, what is the frequency count of the word 'Pilipinas' in the full text?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "simpleExplanation": "'Pilipinas' appears 3 times in the Panatang Makabayan text.",
    "deepDive": "BagOfWordExercise.pdf Page 1, Derivation: Index 36 ('Pilipinas') has count: 3 ('Iniibig ko ang Pilipinas... Dahil mahal ko ang Pilipinas... Sa bansang Pilipinas').",
    "googleQuery": "Pilipinas count Panatang Makabayan bag of words"
  },
  {
    "id": 51,
    "category": "domain3",
    "question": "In the Naive Bayes fruit classification example (Banana vs Orange vs Other), which fruit won for features 'Long, Sweet, Yellow'?",
    "options": [
      "Orange",
      "Other",
      "Banana (with probability ~0.969)",
      "Equal tie between Orange and Banana"
    ],
    "answer": 2,
    "simpleExplanation": "Banana won overwhelmingly with ~96.9% probability.",
    "deepDive": "Presentation 3, Slide 43: 'Result: P(Banana | Long, Sweet, Yellow) = 0.969231'.",
    "googleQuery": "naive bayes fruit classification banana orange 0.969"
  },
  {
    "id": 52,
    "category": "domain1",
    "question": "What is the primary difference between Supervised and Unsupervised POS tagging?",
    "options": [
      "Supervised uses a tagged corpus annotated by a linguist; unsupervised induces tags and dictionaries from untagged text",
      "Supervised runs on GPU; unsupervised runs on CPU",
      "Supervised only works on English; unsupervised only works on Tagalog",
      "Supervised uses regex; unsupervised uses word embeddings"
    ],
    "answer": 0,
    "simpleExplanation": "Supervised learns from human-labeled training data, while unsupervised figures out tags on its own from raw text.",
    "deepDive": "Presentation 1, Slides 48-50: Supervised tagging uses a selected tagset and tagged corpus annotated by a linguist; unsupervised tagging induces tag sets and dictionaries directly from untagged data.",
    "googleQuery": "supervised vs unsupervised POS tagging"
  },
  {
    "id": 53,
    "category": "domain1",
    "question": "Brill's POS tagger is a classic example of which approach?",
    "options": [
      "Probabilistic HMM Tagger",
      "Rule-based (Transformation-based) Tagger",
      "Deep Neural Transformer",
      "Unsupervised clustering"
    ],
    "answer": 1,
    "simpleExplanation": "Brill's tagger is a rule-based, transformation-based tagger.",
    "deepDive": "Presentation 1, Slide 52 & 67: Eric Brill (2000) authored seminal work on Rule-based POS Tagging using databases of words and transformation rules.",
    "googleQuery": "Eric Brill transformation based rule based POS tagging"
  },
  {
    "id": 54,
    "category": "domain2",
    "question": "Which benchmark datasets did RoBERTa consistently outperform BERT on?",
    "options": [
      "ImageNet and MNIST",
      "GLUE, SQuAD, and RACE",
      "WordNet and FrameNet",
      "WMT14 only"
    ],
    "answer": 1,
    "simpleExplanation": "RoBERTa beat BERT on GLUE, SQuAD, and RACE benchmarks.",
    "deepDive": "Presentation Slide 8: Under RoBERTa performance, it 'Consistently outperforms BERT on GLUE, SQuAD, and RACE benchmarks.'",
    "googleQuery": "RoBERTa GLUE SQuAD RACE benchmark performance"
  },
  {
    "id": 55,
    "category": "domain3",
    "question": "In the BoW exercise, what was the total token count of the Panatang Makabayan text before deduplication into vocabulary?",
    "options": [
      "37 tokens",
      "44 tokens",
      "64 tokens",
      "100 tokens"
    ],
    "answer": 2,
    "simpleExplanation": "There were 64 words (tokens) in total in the text, which boiled down to 44 unique vocabulary words.",
    "deepDive": "BagOfWordExercise.pdf Question 2 Solution: 'Counting word occurrences in the text (case-insensitively, total = 64 tokens)'.",
    "googleQuery": "Panatang Makabayan 64 tokens 44 unique vocabulary"
  },
  {
    "id": 56,
    "category": "domain1",
    "question": "What is Compounding in morphology?",
    "options": [
      "Combining an affix with a bound root",
      "Combining two or more independent words that correspond to a single unified meaning",
      "Reducing a word's syllable count",
      "Discarding grammatical inflections"
    ],
    "answer": 1,
    "simpleExplanation": "Compounding combines two full words to create a single concept, like 'Green House' or 'taltalak'.",
    "deepDive": "Presentation 2, Slide 18: 'Compounding involves a sequence of two or more words but the sequence corresponds to a single meaning' (e.g. Green House, taltalak).",
    "googleQuery": "compounding morphology linguistics"
  },
  {
    "id": 57,
    "category": "domain2",
    "question": "In the SDG classification paper, what tool was used for web scraping institutional sustainability reports?",
    "options": [
      "Selenium + BeautifulSoup",
      "Scrapy + PyTorch",
      "Puppeteer + React",
      "TensorFlow + Keras"
    ],
    "answer": 0,
    "simpleExplanation": "Selenium and BeautifulSoup were used together to scrape the university websites.",
    "deepDive": "Presentation Slide 6: 'Mixed collection methods: automated web scraping (Selenium + BeautifulSoup) and manual entry for security-sensitive institutions.'",
    "googleQuery": "Selenium BeautifulSoup web scraping text data"
  },
  {
    "id": 58,
    "category": "domain3",
    "question": "If word W appears in category C zero times, what does standard Laplace smoothing assign as its smoothed probability numerator?",
    "options": [
      "0",
      "1",
      "0.5",
      "Vocabulary size |V|"
    ],
    "answer": 1,
    "simpleExplanation": "Laplace smoothing adds 1 to the count, so 0 + 1 = 1 in the numerator.",
    "deepDive": "Presentation 3, Slide 66 & Laplace Formula: Numerator becomes (Count + 1), so for Count = 0, the numerator is 1.",
    "googleQuery": "Laplace add one smoothing numerator"
  },
  {
    "id": 59,
    "category": "domain1",
    "question": "What is an infix?",
    "options": [
      "An affix inserted inside the root word itself",
      "An affix placed at the very start of a word",
      "An affix placed at the very end of a word",
      "A word that cannot be pronounced"
    ],
    "answer": 0,
    "simpleExplanation": "An infix is inserted right in the middle of a root word (like -in- in Tagalog and Kankanaey 'g-in-abyon').",
    "deepDive": "Presentation 2, Slides 11 & 22-26: Infixation inserts an affix within a base root, common in Philippine languages (e.g. -in- in ginabyon, -um- in gumabyon).",
    "googleQuery": "infixation morphology Philippine languages"
  },
  {
    "id": 60,
    "category": "domain2",
    "question": "Which deep learning framework was used to train the RoBERTa model in the presented study?",
    "options": [
      "TensorFlow 1.x",
      "PyTorch with Hugging Face Transformers",
      "Apache MXNet",
      "Caffe"
    ],
    "answer": 1,
    "simpleExplanation": "They used PyTorch with Hugging Face Transformers.",
    "deepDive": "Presentation Slide 5: Deep Learning Framework: PyTorch; Software Library: Hugging Face's Transformers; Development Environment: Google Colab.",
    "googleQuery": "PyTorch Hugging Face Transformers RoBERTa training"
  }
];
const FLASHCARDS = [
  {
    "category": "Domain 1",
    "front": "What is a Morpheme?",
    "back": "The smallest indivisible meaningful unit in a language (roots, prefixes, suffixes). Subdivided into free (standalone) and bound (attached) morphemes."
  },
  {
    "category": "Domain 1",
    "front": "What is a Lexeme & Paradigm?",
    "back": "A Lexeme is an abstract dictionary unit (e.g. SING). A Paradigm is the full set of word forms realizing that lexeme (e.g. {sing, sang, sung, sings, singing})."
  },
  {
    "category": "Domain 1",
    "front": "What is the Closure Principle?",
    "back": "'Inflection closes words for further derivation, while derivation does not.' Once an inflectional suffix attaches (e.g. -ed), you cannot attach derivational affixes."
  },
  {
    "category": "Domain 1",
    "front": "What is Incorporation?",
    "back": "Concatenation of a verb with another word (noun, pronoun) into a single word realizing combined syntax. Example: Kankanaey 'kinanko' ('ate' + 'I' = 'I ate it')."
  },
  {
    "category": "Domain 1",
    "front": "What is a Clitic / Enclitic?",
    "back": "A morpheme syntactically independent but phonologically bound to a host word. Examples: 'm in I'm, n't in don't, Filipino particles: ba, na, pa, din."
  },
  {
    "category": "Domain 1",
    "front": "What is Compounding?",
    "back": "A sequence of two or more words functioning as a single semantic unit. Example: 'Green House', Kankanaey 'taltalak' (toy car, from talak = car)."
  },
  {
    "category": "Domain 1",
    "front": "Why is 'gabyon' significant in Miguel (2009)?",
    "back": "In Kankanaey, the noun 'gabyon' (farming hoe) serves as a semantic repository generating over 50 inflections, derivations, and compound incorporations."
  },
  {
    "category": "Domain 1",
    "front": "Tagalog Tagsets: Rabo vs. Buban?",
    "back": "Rabo (2004) Tagset = 59 tags. Revised Tagalog Tagset by Dr. Buban = 65 tags."
  },
  {
    "category": "Domain 1",
    "front": "Most & Least frequent Tagalog POS tags?",
    "back": "NNC (Common Noun) is the highest frequency tag and default for unknown words. VBOI is the least frequent tag (zero in some corpora)."
  },
  {
    "category": "Domain 1",
    "front": "HMM POS Tagging Probabilities?",
    "back": "1. Lexical / Emission Probability: P(word | tag). 2. Contextual / Transition Probability: P(tag_i | tag_{i-1})."
  },
  {
    "category": "Domain 2",
    "front": "What is 'SDG-Washing'?",
    "back": "When institutions make superficial sustainability or green claims in their reports without measurable, verifiable proof."
  },
  {
    "category": "Domain 2",
    "front": "Dataset Size in RoBERTa SDG Study?",
    "back": "748 documents collected across 15 Philippine HEIs via Selenium/BeautifulSoup web scraping and Pytesseract OCR."
  },
  {
    "category": "Domain 2",
    "front": "Why Multi-Hot Vector Encoding for SDGs?",
    "back": "Because an institutional document can address multiple SDGs simultaneously (multi-label classification across 17 goals)."
  },
  {
    "category": "Domain 2",
    "front": "What is LexDG and its Ablation Result?",
    "back": "A specialized lexicon of Philippine/regional (Ilocano) terms. In the ablation study without LexDG, the model's F1-score dropped from 0.74 to 0.68."
  },
  {
    "category": "Domain 2",
    "front": "Key Architectural Differences: BERT vs. RoBERTa?",
    "back": "RoBERTa uses Dynamic Masking (vs Static), removes Next Sentence Prediction (NSP), trains on 160 GB data (vs 16 GB), uses Byte-level BPE 50k vocab (vs WordPiece 30k), and uses larger batch sizes."
  },
  {
    "category": "Domain 2",
    "front": "RoBERTa SDG Model Results?",
    "back": "96.77% Weighted Accuracy, 0.80 Micro-Precision, 0.70 Micro-Recall, 0.74 Micro-F1. Outperformed baselines (LogReg 0.64, SVM 0.67, BERT 0.70)."
  },
  {
    "category": "Domain 2",
    "front": "GCP Cloud Stack & Estimated Monthly Cost?",
    "back": "Google Cloud Vertex AI (model serving) + Firestore (NoSQL database) + Flask/Node.js web UI. Estimated cost: \u20b12,700 to \u20b18,300 per month."
  },
  {
    "category": "Domain 2",
    "front": "Category Overlap Limitation in SDG Study?",
    "back": "Semantic overlap between SDG 2 (Zero Hunger) and SDG 13 (Climate Action) due to shared vocabulary like 'agriculture' and 'sustainability' (SDG 2 F1 = 0.55)."
  },
  {
    "category": "Domain 3",
    "front": "What is Bag of Words (BoW)?",
    "back": "A text representation that counts the occurrence frequency of each vocabulary word in a document, completely ignoring grammar and word order."
  },
  {
    "category": "Domain 3",
    "front": "Panatang Makabayan 44 to 37 Reduction?",
    "back": "Initial vocabulary had 44 unique words. Removing 7 stopwords (ang, at, ko, mga, nang, ng, sa) reduced dimensionality to 44 - 7 = 37 words."
  },
  {
    "category": "Domain 3",
    "front": "Which words have highest counts in the 37-D BoW?",
    "back": "Index 1: 'aking' (count = 4). Index 30: 'Pilipinas' (count = 3). All other 35 words have count = 1."
  },
  {
    "category": "Domain 3",
    "front": "Conditional Probability Formula?",
    "back": "P(A | B) = P(A \u2229 B) / P(B). Example: P(Female | Student) = (32/100) / (80/100) = 32/80 = 0.40."
  },
  {
    "category": "Domain 3",
    "front": "Why discard denominator in Naive Bayes?",
    "back": "Because the denominator P(X1, ..., Xn) is identical for all candidate categories C, so it does not affect the argmax ranking: argmax P(C)\u220fP(Xi|C)."
  },
  {
    "category": "Domain 3",
    "front": "What is Laplace (+1) Smoothing?",
    "back": "Adding 1 to every word frequency count so that unseen words in a category do not produce a 0 probability that zeroes out the entire product."
  },
  {
    "category": "Domain 3",
    "front": "Language Identification Formula?",
    "back": "L_hat = argmax_L [ P(L) * \u220f P(w_i | L) ]. For 'naimbag nga rabii', multiply P(Ilocano) by P('naimbag'|Ilocano)*P('nga'|Ilocano)*P('rabii'|Ilocano)."
  }
];

// 44-Word and 37-Word Vocabulary Tables for Interactive BoW Tool
const BOW_VOCAB_44 = [
  "aking", "ako", "ang", "at", "bansang", "buhay", "buong", "dahil", "diringgin", "iaalay",
  "iniibig", "isang", "katapatan", "kinukupkop", "ko", "lahi", "lupang", "maging", "magulang", "mahal",
  "makabayan", "malakas", "mamamayang", "marangal", "masipag", "mga", "nag-aaral", "nagdarasal", "naglilingkod", "nang",
  "ng", "paaralan", "pagsisikap", "pangarap", "payo", "Pilipinas", "Sa", "Sinilangan", "Susundin", "Tahanan",
  "Tinutulungang", "Tungkulin", "Tuntunin", "Tutuparin"
];

const BOW_STOPWORDS_7 = ["ang", "at", "ko", "mga", "nang", "ng", "sa"];

const BOW_VOCAB_37 = [
  "aking", "ako", "bansang", "buhay", "buong", "dahil", "diringgin", "iaalay", "iniibig", "isang",
  "katapatan", "kinukupkop", "lahi", "lupang", "maging", "magulang", "mahal", "makabayan", "malakas", "mamamayang",
  "marangal", "masipag", "nag-aaral", "nagdarasal", "naglilingkod", "paaralan", "pagsisikap", "pangarap", "payo", "Pilipinas",
  "Sinilangan", "Susundin", "Tahanan", "Tinutulungang", "Tungkulin", "Tuntunin", "Tutuparin"
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { REVIEWER_MODULES, QUIZ_QUESTIONS, FLASHCARDS, BOW_VOCAB_44, BOW_STOPWORDS_7, BOW_VOCAB_37 };
}
