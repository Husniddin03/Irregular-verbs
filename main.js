// Irregular verbs data (paste your array here or import from a JS/JSON file)
const irregularVerbs = [
  { infinitive: "be (am,is,are)", past: "was/were", participle: "been", meaning: "bo'lmoq" },
  { infinitive: "beat", past: "beat", participle: "beaten", meaning: "urmoq" },
  { infinitive: "become", past: "became", participle: "become", meaning: "bo'lmoq" },
  { infinitive: "begin", past: "began", participle: "begun", meaning: "boshlamoq" },
  { infinitive: "bend", past: "bent", participle: "bent", meaning: "egmoq" },
  { infinitive: "bet", past: "bet", participle: "bet", meaning: "garov o'ynamoq" },
  { infinitive: "bite", past: "bit", participle: "bitten", meaning: "tishlamoq" },
  { infinitive: "blow", past: "blew", participle: "blown", meaning: "esmoq" },
  { infinitive: "break", past: "broke", participle: "broken", meaning: "sindirmoq" },
  { infinitive: "bring", past: "brought", participle: "brought", meaning: "olib kelmoq" },
  { infinitive: "broadcast", past: "broadcast", participle: "broadcast", meaning: "efirga uzatmoq" },
  { infinitive: "build", past: "built", participle: "built", meaning: "qurmoq" },
  { infinitive: "burst", past: "burst", participle: "burst", meaning: "portlamoq, kuydirib olmoq" },
  { infinitive: "buy", past: "bought", participle: "bought", meaning: "sotib olmoq" },
  { infinitive: "catch", past: "caught", participle: "caught", meaning: "ushlamoq" },
  { infinitive: "choose", past: "chose", participle: "chosen", meaning: "tanlamoq" },
  { infinitive: "come", past: "came", participle: "come", meaning: "kelmoq" },
  { infinitive: "cost", past: "cost", participle: "cost", meaning: "narxi turmoq" },
  { infinitive: "creep", past: "crept", participle: "crept", meaning: "sudralmoq, emaklamoq" },
  { infinitive: "cut", past: "cut", participle: "cut", meaning: "kesmoq" },
  { infinitive: "deal", past: "dealt", participle: "dealt", meaning: "tarqatmoq, hal qilmoq" },
  { infinitive: "dig", past: "dug", participle: "dug", meaning: "kovlamoq" },
  { infinitive: "do", past: "did", participle: "done", meaning: "qilmoq, bajarmoq" },
  { infinitive: "draw", past: "drew", participle: "drawn", meaning: "chizmoq" },
  { infinitive: "drink", past: "drank", participle: "drunk", meaning: "ichmoq" },
  { infinitive: "drive", past: "drove", participle: "driven", meaning: "haydamoq (mashinani....)" },
  { infinitive: "eat", past: "ate", participle: "eaten", meaning: "yemoq" },
  { infinitive: "fall", past: "fell", participle: "fallen", meaning: "yiqilmoq" },
  { infinitive: "feed", past: "fed", participle: "fed", meaning: "boqmoq, ovqatlantirmoq" },
  { infinitive: "feel", past: "felt", participle: "felt", meaning: "his qilmoq" },
  { infinitive: "fight", past: "fought", participle: "fought", meaning: "kurashmoq" },
  { infinitive: "find", past: "found", participle: "found", meaning: "topmoq" },
  { infinitive: "flee", past: "fled", participle: "fled", meaning: "qochmoq, qochib ketmoq" },
  { infinitive: "fly", past: "flew", participle: "flown", meaning: "uchmoq" },
  { infinitive: "forbid", past: "forbade", participle: "forbidden", meaning: "ta'qiqlamoq" },
  { infinitive: "forget", past: "forgot", participle: "forgotten", meaning: "unutmoq" },
  { infinitive: "forgive", past: "forgave", participle: "forgiven", meaning: "kechirmoq" },
  { infinitive: "freeze", past: "froze", participle: "frozen", meaning: "muzlamoq" },
  { infinitive: "get", past: "got", participle: "got", meaning: "olmoq, yetmoq" },
  { infinitive: "give", past: "gave", participle: "given", meaning: "bermoq" },
  { infinitive: "go", past: "went", participle: "gone", meaning: "ketmoq, bormoq" },
  { infinitive: "grow", past: "grew", participle: "grown", meaning: "o'smoq, o'stirmoq" },
  { infinitive: "hang", past: "hung", participle: "hung", meaning: "ilmoq" },
  { infinitive: "hear", past: "heard", participle: "heard", meaning: "eshitmoq" },
  { infinitive: "hide", past: "hid", participle: "hidden", meaning: "yashirmoq, berkitmoq" },
  { infinitive: "hit", past: "hit", participle: "hit", meaning: "urmoq" },
  { infinitive: "hold", past: "held", participle: "held", meaning: "ushlamoq, o'tkazmoq" },
  { infinitive: "hurt", past: "hurt", participle: "hurt", meaning: "jarohatlamoq, og'rimoq" },
  { infinitive: "keep", past: "kept", participle: "kept", meaning: "saqlamoq" },
  { infinitive: "kneel", past: "knelt", participle: "knelt", meaning: "tizzalamoq" },
  { infinitive: "know", past: "knew", participle: "known", meaning: "bilmoq" },
  { infinitive: "lay", past: "laid", participle: "laid", meaning: "qo'ymoq" },
  { infinitive: "lead", past: "led", participle: "led", meaning: "yetaklamoq" },
  { infinitive: "leave", past: "left", participle: "left", meaning: "jo'nab ketmoq, qoldirmoq" },
  { infinitive: "lend", past: "lent", participle: "lent", meaning: "qarz bermoq" },
  { infinitive: "let", past: "let", participle: "let", meaning: "ruxsat bermoq" },
  { infinitive: "lie", past: "lay", participle: "lain", meaning: "yotmoq aldamoq" },
  { infinitive: "light", past: "lit", participle: "lit", meaning: "yoqmoq, yoritmoq" },
  { infinitive: "lose", past: "lost", participle: "lost", meaning: "yo'qotmoq" },
  { infinitive: "mean", past: "meant", participle: "meant", meaning: "anglatmoq" },
  { infinitive: "meet", past: "met", participle: "met", meaning: "uchrashmoq" },
  { infinitive: "pay", past: "paid", participle: "paid", meaning: "to'lamoq" },
  { infinitive: "put", past: "put", participle: "put", meaning: "qo'ymoq" },
  { infinitive: "read", past: "read", participle: "read", meaning: "o'qimoq" },
  { infinitive: "ride", past: "rode", participle: "ridden", meaning: "minmoq(velosiped, ot..)" },
  { infinitive: "ring", past: "rang", participle: "rung", meaning: "qo'ng'iroq qilmoq" },
  { infinitive: "rise", past: "rose", participle: "risen", meaning: "ko'tarilmoq" },
  { infinitive: "run", past: "ran", participle: "run", meaning: "yugurmoq" },
  { infinitive: "say", past: "said", participle: "said", meaning: "aytmoq, demoq" },
  { infinitive: "see", past: "saw", participle: "seen", meaning: "ko'rmoq" },
  { infinitive: "seek", past: "sought", participle: "sought", meaning: "qidirmoq, izlamoq" },
  { infinitive: "sell", past: "sold", participle: "sold", meaning: "sotmoq" },
  { infinitive: "send", past: "sent", participle: "sent", meaning: "jo'natmoq" },
  { infinitive: "set", past: "set", participle: "set", meaning: "qo'ymoq" },
  { infinitive: "sew", past: "sewed", participle: "sewn/sewed", meaning: "tikmoq" },
  { infinitive: "shake", past: "shook", participle: "shaken", meaning: "silkitmoq, titramoq" },
  { infinitive: "shine", past: "shone", participle: "shone", meaning: "nur sochmoq" },
  { infinitive: "shoot", past: "shot", participle: "shot", meaning: "o'q otmoq" },
  { infinitive: "show", past: "showed", participle: "shown/showed", meaning: "ko'rsatmoq" },
  { infinitive: "shrink", past: "shrank", participle: "shrunk", meaning: "kichraymoq, (kiyim) kirishmoq" },
  { infinitive: "shut", past: "shut", participle: "shut", meaning: "yopmoq" },
  { infinitive: "sing", past: "sang", participle: "sung", meaning: "kuylamoq" },
  { infinitive: "sink", past: "sank", participle: "sunk", meaning: "cho'kmoq" },
  { infinitive: "sit", past: "sat", participle: "sat", meaning: "o'tirmoq" },
  { infinitive: "sleep", past: "slept", participle: "slept", meaning: "uxlamoq" },
  { infinitive: "slide", past: "slid", participle: "slid", meaning: "sirpanmoq, toymoq" },
  { infinitive: "speak", past: "spoke", participle: "spoken", meaning: "gapirmoq" },
  { infinitive: "spend", past: "spent", participle: "spent", meaning: "sarflamoq, o'tkazmoq (vaqtni)" },
  { infinitive: "spit", past: "spat", participle: "spat", meaning: "tupurmoq" },
  { infinitive: "split", past: "split", participle: "split", meaning: "ajralib ketmoq" },
  { infinitive: "spread", past: "spread", participle: "spread", meaning: "yoyilmoq" },
  { infinitive: "spring", past: "sprang", participle: "sprung", meaning: "sakramoq" },
  { infinitive: "stand", past: "stood", participle: "stood", meaning: "turmoq" },
  { infinitive: "steal", past: "stole", participle: "stolen", meaning: "o'g'irlamoq" },
  { infinitive: "stick", past: "stuck", participle: "stuck", meaning: "yopishtirmoq, sanchmoq" },
  { infinitive: "sting", past: "stung", participle: "stung", meaning: "(ari)chaqmoq,(ko'zi)achishmoq" },
  { infinitive: "stink", past: "stank", participle: "stunk", meaning: "sasimоq" },
  { infinitive: "strike", past: "struck", participle: "struck", meaning: "urmoq, ish tashlamoq" },
  { infinitive: "swear", past: "swore", participle: "sworn", meaning: "so'kinmoq" },
  { infinitive: "sweep", past: "swept", participle: "swept", meaning: "supurmoq" },
  { infinitive: "swim", past: "swam", participle: "swum", meaning: "cho'milmoq" },
  { infinitive: "swing", past: "swung", participle: "swung", meaning: "tebranmoq, tebratmoq" },
  { infinitive: "take", past: "took", participle: "taken", meaning: "olmoq" },
  { infinitive: "teach", past: "taught", participle: "taught", meaning: "o'qitmoq, o'rgatmoq" },
  { infinitive: "tear", past: "tore", participle: "torn", meaning: "yirtmoq" },
  { infinitive: "tell", past: "told", participle: "told", meaning: "aytmoq" },
  { infinitive: "think", past: "thought", participle: "thought", meaning: "o'ylamoq" },
  { infinitive: "throw", past: "threw", participle: "thrown", meaning: "uloqtirmoq" },
  { infinitive: "understand", past: "understood", participle: "understood", meaning: "tushunmoq" },
  { infinitive: "upset", past: "upset", participle: "upset", meaning: "xafa qilmoq" },
  { infinitive: "wake", past: "woke", participle: "woken", meaning: "o'yg'onmoq" },
  { infinitive: "wear", past: "wore", participle: "worn", meaning: "kiymoq" },
  { infinitive: "weep", past: "wept", participle: "wept", meaning: "yig'lamoq" },
  { infinitive: "win", past: "won", participle: "won", meaning: "yutmoq, g'olib bo'lmoq" },
  { infinitive: "write", past: "wrote", participle: "written", meaning: "yozmoq" }
];



// Global variables
let filteredVerbs = [...irregularVerbs];
let currentSpeechIndex = 0;
let isPracticeModeActive = false;

// DOM elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const filterSelect = document.getElementById('filterSelect');
const pronounceAllBtn = document.getElementById('pronounceAll');
const verbsTableBody = document.getElementById('verbsTableBody');
const totalVerbsSpan = document.getElementById('totalVerbs');
const filteredVerbsSpan = document.getElementById('filteredVerbs');

// Text-to-Speech functionality
const synth = window.speechSynthesis;
let currentUtterance = null;

// Initialize the application
function init() {
  renderTable();
  updateStats();
  setupEventListeners();
  
  // Set initial stats
  totalVerbsSpan.textContent = irregularVerbs.length;
}

// Setup all event listeners
function setupEventListeners() {
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  clearSearchBtn.addEventListener('click', clearSearch);
  filterSelect.addEventListener('change', handleFilter);
  pronounceAllBtn.addEventListener('click', togglePracticeMode);
  
  // Hide clear button initially
  clearSearchBtn.style.display = 'none';
}

// Debounce function for search input
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle search functionality
function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  if (searchTerm === '') {
    clearSearchBtn.style.display = 'none';
    filteredVerbs = [...irregularVerbs];
  } else {
    clearSearchBtn.style.display = 'block';
    filteredVerbs = irregularVerbs.filter(verb => 
      verb.infinitive.toLowerCase().includes(searchTerm) ||
      verb.past.toLowerCase().includes(searchTerm) ||
      verb.participle.toLowerCase().includes(searchTerm) ||
      verb.meaning.toLowerCase().includes(searchTerm)
    );
  }
  
  applyCurrentFilter();
  renderTable();
  updateStats();
}

// Clear search
function clearSearch() {
  searchInput.value = '';
  clearSearchBtn.style.display = 'none';
  filteredVerbs = [...irregularVerbs];
  applyCurrentFilter();
  renderTable();
  updateStats();
  searchInput.focus();
}

// Handle filter functionality
function handleFilter() {
  applyCurrentFilter();
  renderTable();
  updateStats();
}

// Apply current filter
function applyCurrentFilter() {
  const filterValue = filterSelect.value;
  
  if (filterValue === 'all') {
    return;
  }
  
  const ranges = {
    'a-f': ['a', 'f'],
    'g-l': ['g', 'l'],
    'm-r': ['m', 'r'],
    's-z': ['s', 'z']
  };
  
  if (ranges[filterValue]) {
    const [start, end] = ranges[filterValue];
    filteredVerbs = filteredVerbs.filter(verb => {
      const firstLetter = verb.infinitive.charAt(0).toLowerCase();
      return firstLetter >= start && firstLetter <= end;
    });
  }
}

// Render the verbs table
function renderTable() {
  if (filteredVerbs.length === 0) {
    verbsTableBody.innerHTML = `
      <tr>
        <td colspan="4" class="no-results">
          <i class="fas fa-search"></i>
          <h3>No verbs found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </td>
      </tr>
    `;
    return;
  }
  
  verbsTableBody.innerHTML = filteredVerbs.map((verb, index) => `
    <tr class="verb-row" style="animation-delay: ${index * 0.05}s">
      <td>
        <div class="verb-cell infinitive-cell">
          <button class="pronounce-btn" onclick="pronounce('${escapeQuotes(verb.infinitive)}')" title="Pronounce">
            <i class="fas fa-volume-up"></i>
          </button>
          <strong>${verb.infinitive}</strong>
        </div>
      </td>
      <td>
        <div class="verb-cell past-cell">
          <button class="pronounce-btn" onclick="pronounce('${escapeQuotes(verb.past)}')" title="Pronounce">
            <i class="fas fa-volume-up"></i>
          </button>
          <strong>${verb.past}</strong>
        </div>
      </td>
      <td>
        <div class="verb-cell participle-cell">
          <button class="pronounce-btn" onclick="pronounce('${escapeQuotes(verb.participle)}')" title="Pronounce">
            <i class="fas fa-volume-up"></i>
          </button>
          <strong>${verb.participle}</strong>
        </div>
      </td>
      <td>
        <div class="verb-cell meaning-cell">
          ${verb.meaning}
        </div>
      </td>
    </tr>
  `).join('');
}

// Escape quotes for onclick attributes
function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

// Text-to-speech pronunciation
function pronounce(text) {
  // Stop any current speech
  if (synth.speaking) {
    synth.cancel();
  }
  
  // Clean the text for better pronunciation
  const cleanText = text.replace(/\(.*?\)/g, '').trim();
  
  // Create new utterance
  currentUtterance = new SpeechSynthesisUtterance(cleanText);
  
  // Set properties
  currentUtterance.rate = 0.8;
  currentUtterance.pitch = 1;
  currentUtterance.volume = 1;
  
  // Try to use English voice
  const voices = synth.getVoices();
  const englishVoice = voices.find(voice => 
    voice.lang.startsWith('en') && voice.name.includes('Google')
  ) || voices.find(voice => voice.lang.startsWith('en'));
  
  if (englishVoice) {
    currentUtterance.voice = englishVoice;
  }
  
  // Add visual feedback
  const buttons = document.querySelectorAll('.pronounce-btn');
  buttons.forEach(btn => btn.classList.remove('playing'));
  
  currentUtterance.onstart = () => {
    event.target.classList.add('playing');
  };
  
  currentUtterance.onend = () => {
    buttons.forEach(btn => btn.classList.remove('playing'));
  };
  
  // Speak the text
  synth.speak(currentUtterance);
}

// Practice Mode functionality
function togglePracticeMode() {
  if (isPracticeModeActive) {
    stopPracticeMode();
  } else {
    startPracticeMode();
  }
}

function startPracticeMode() {
  if (filteredVerbs.length === 0) {
    alert('No verbs to practice! Please adjust your search or filter criteria.');
    return;
  }
  
  isPracticeModeActive = true;
  currentSpeechIndex = 0;
  
  pronounceAllBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Practice';
  pronounceAllBtn.style.background = '#dc2626';
  
  practiceNextVerb();
}

function stopPracticeMode() {
  isPracticeModeActive = false;
  
  if (synth.speaking) {
    synth.cancel();
  }
  
  pronounceAllBtn.innerHTML = '<i class="fas fa-volume-up"></i> Practice Mode';
  pronounceAllBtn.style.background = '#16a34a';
  
  // Remove playing states
  const buttons = document.querySelectorAll('.pronounce-btn');
  buttons.forEach(btn => btn.classList.remove('playing'));
}

function practiceNextVerb() {
  if (!isPracticeModeActive || currentSpeechIndex >= filteredVerbs.length) {
    stopPracticeMode();
    return;
  }
  
  const verb = filteredVerbs[currentSpeechIndex];
  const textToPronounce = `${verb.infinitive.replace(/\(.*?\)/g, '').trim()}, ${verb.past}, ${verb.participle}`;
  
  if (synth.speaking) {
    synth.cancel();
  }
  
  currentUtterance = new SpeechSynthesisUtterance(textToPronounce);
  currentUtterance.rate = 0.7;
  currentUtterance.pitch = 1;
  currentUtterance.volume = 1;
  
  // Set English voice
  const voices = synth.getVoices();
  const englishVoice = voices.find(voice => 
    voice.lang.startsWith('en') && voice.name.includes('Google')
  ) || voices.find(voice => voice.lang.startsWith('en'));
  
  if (englishVoice) {
    currentUtterance.voice = englishVoice;
  }
  
  currentUtterance.onend = () => {
    currentSpeechIndex++;
    setTimeout(() => {
      if (isPracticeModeActive) {
        practiceNextVerb();
      }
    }, 1500); // Wait 1.5 seconds before next verb
  };
  
  synth.speak(currentUtterance);
}

// Update statistics
function updateStats() {
  filteredVerbsSpan.textContent = filteredVerbs.length;
}

// Handle voices loading (sometimes voices load asynchronously)
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {
    // Voices loaded, no specific action needed
  };
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle visibility change to stop speech when tab is hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden && synth.speaking) {
    synth.cancel();
    stopPracticeMode();
  }
});

// Global function for inline onclick handlers
window.pronounce = pronounce;