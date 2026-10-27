const verses = [
  {
    id: "matthew-1128",
    reference: "MATTHEW 11:28",
    topic: "Rest & peace",
    topics: ["Anxiety"],
    text: "“Come unto me, all ye that labour and are heavy laden, and I will give you rest.”",
    explanation: "Jesus speaks to people who are tired from carrying too much. This is an invitation to come honestly, as you are—not a demand to have everything figured out first. Rest can start with letting yourself be supported.",
    practice: "Pause for a minute. Name one thing you don’t have to solve right now.",
    reactions: { heart: 24, helpful: 12 }
  },
  {
    id: "philippians-467",
    reference: "PHILIPPIANS 4:6–7",
    topic: "Rest & peace",
    topics: ["Anxiety"],
    text: "“Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.”",
    explanation: "Paul isn’t dismissing the things that worry us. He offers a practice: bring what’s on your mind to God, make room for gratitude, and receive peace that doesn’t depend on having every answer.",
    practice: "Write down a worry, then one small thing you’re grateful for today.",
    reactions: { heart: 18, helpful: 9 }
  },
  {
    id: "psalm-461",
    reference: "PSALM 46:1",
    topic: "Finding strength",
    topics: ["Strength", "Anxiety"],
    text: "“God is our refuge and strength, a very present help in trouble.”",
    explanation: "A refuge is a place to turn when life feels uncertain. This verse reminds us that seeking help isn’t weakness—and that comfort, community, and faith can meet us right in the middle of a hard season.",
    practice: "Reach out to someone you trust. You don’t have to carry this alone.",
    reactions: { heart: 31, helpful: 15 }
  },
  {
    id: "romans-828",
    reference: "ROMANS 8:28",
    topic: "Hope for tomorrow",
    topics: ["Hope"],
    text: "“And we know that all things work together for good to them that love God.”",
    explanation: "This isn’t a promise that everything that happens is good. It’s a reminder that difficult chapters aren’t the whole story, and that meaning, growth, and goodness can still take shape along the way.",
    practice: "Look back on one hard thing you made it through. What helped you keep going?",
    reactions: { heart: 27, helpful: 11 }
  },
  {
    id: "proverbs-356",
    reference: "PROVERBS 3:5–6",
    topic: "Taking the next step",
    topics: ["Anxiety", "Hope"],
    text: "“Trust in the LORD with all thine heart; and lean not unto thine own understanding.”",
    explanation: "We don’t always get to see the whole road ahead. This wisdom invites us to stay open, seek guidance, and take the next faithful step instead of demanding certainty about every step after it.",
    practice: "Ask yourself: What is one kind, wise next step I can take today?",
    reactions: { heart: 16, helpful: 8 }
  },
  {
    id: "psalm-11824",
    reference: "PSALM 118:24",
    topic: "Everyday gratitude",
    topics: ["Gratitude", "Hope"],
    text: "“This is the day which the LORD hath made; we will rejoice and be glad in it.”",
    explanation: "Gratitude doesn’t ask us to pretend every day is easy. It helps us notice one good and true thing in the day we actually have: a breath, a kind word, a fresh chance to begin.",
    practice: "Notice one small good thing around you. Let yourself enjoy it for a moment.",
    reactions: { heart: 22, helpful: 7 }
  },
  {
    id: "joshua-19",
    reference: "JOSHUA 1:9",
    topic: "Finding strength",
    topics: ["Strength", "Hope"],
    text: "“Be strong and of a good courage; be not afraid, neither be thou dismayed.”",
    explanation: "These words were given at the threshold of a daunting new chapter. Courage doesn’t mean feeling no fear—it can mean moving forward gently, even when you’re still finding your footing.",
    practice: "Choose one thing you’ve been putting off. Take the smallest possible first step.",
    reactions: { heart: 29, helpful: 14 }
  },
  {
    id: "psalm-231",
    reference: "PSALM 23:1",
    topic: "Feeling cared for",
    topics: ["Hope", "Gratitude"],
    text: "“The LORD is my shepherd; I shall not want.”",
    explanation: "The image of a shepherd is one of steady care and guidance. This verse offers reassurance that you are worthy of care and that you can take life one step at a time, even when you don’t know the whole way.",
    practice: "Give yourself one form of care today that you would offer someone you love.",
    reactions: { heart: 34, helpful: 10 }
  },
  {
    id: "isaiah-4031",
    reference: "ISAIAH 40:31",
    topic: "Finding strength",
    topics: ["Strength"],
    text: "“But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.”",
    explanation: "Waiting here isn’t giving up; it’s making space to be renewed. When your energy is low, rest and patience are part of the journey—not proof that you’re falling behind.",
    practice: "Let one thing wait while you take a real, guilt-free break.",
    reactions: { heart: 20, helpful: 13 }
  }
];

const storageKeys = {
  saved: "selah-saved-verses",
  reactions: "selah-reactions"
};

const bibleLibrary = [
  { name: "Genesis", chapter: "Chapter 1", passage: "In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light." },
  { name: "Exodus", chapter: "Chapter 14", passage: "And the LORD said unto Moses, Wherefore criest thou unto me? speak unto the children of Israel, that they go forward." },
  { name: "Leviticus", chapter: "Chapter 19", passage: "Ye shall be holy: for I the LORD your God am holy." },
  { name: "Numbers", chapter: "Chapter 6", passage: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee." },
  { name: "Deuteronomy", chapter: "Chapter 31", passage: "Be strong and of a good courage, fear not, neither be afraid: for the LORD thy God, he it is that doth go with thee." },
  { name: "Joshua", chapter: "Chapter 1", passage: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest." },
  { name: "Judges", chapter: "Chapter 6", passage: "The LORD is with thee, thou mighty man of valour." },
  { name: "Ruth", chapter: "Chapter 1", passage: "Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God." },
  { name: "1 Samuel", chapter: "Chapter 16", passage: "Man looketh on the outward appearance, but the LORD looketh on the heart." },
  { name: "2 Samuel", chapter: "Chapter 22", passage: "The LORD is my rock, and my fortress, and my deliverer." },
  { name: "1 Kings", chapter: "Chapter 3", passage: "Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad." },
  { name: "2 Kings", chapter: "Chapter 20", passage: "I beseech thee, O LORD, remember now how I have walked before thee in truth and with a perfect heart." },
  { name: "1 Chronicles", chapter: "Chapter 16", passage: "Blessed be the LORD God of Israel for ever and ever." },
  { name: "2 Chronicles", chapter: "Chapter 7", passage: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven." },
  { name: "Ezra", chapter: "Chapter 8", passage: "Then I proclaimed a fast there, at the river of Ahava, that we might afflict ourselves before our God." },
  { name: "Nehemiah", chapter: "Chapter 8", passage: "This day is holy unto the LORD your God; mourn not, nor weep." },
  { name: "Esther", chapter: "Chapter 4", passage: "If I perish, I perish." },
  { name: "Job", chapter: "Chapter 19", passage: "I know that my redeemer liveth, and that he shall stand at the latter day upon the earth." },
  { name: "Psalms", chapter: "Chapter 23", passage: "The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters." },
  { name: "Proverbs", chapter: "Chapter 3", passage: "Trust in the LORD with all thine heart; and lean not unto thine own understanding." },
  { name: "Ecclesiastes", chapter: "Chapter 3", passage: "To every thing there is a season, and a time to every purpose under the heaven." },
  { name: "Song of Solomon", chapter: "Chapter 2", passage: "I am the rose of Sharon, and the lily of the valleys." },
  { name: "Isaiah", chapter: "Chapter 40", passage: "They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles." },
  { name: "Jeremiah", chapter: "Chapter 29", passage: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil." },
  { name: "Lamentations", chapter: "Chapter 3", passage: "The LORD is good unto them that wait for him, to the soul that seeketh him." },
  { name: "Ezekiel", chapter: "Chapter 36", passage: "A new heart also will I give you, and a new spirit will I put within you." },
  { name: "Daniel", chapter: "Chapter 6", passage: "My God hath sent his angel, and hath shut the lions' mouths, and they have not hurt me." },
  { name: "Hosea", chapter: "Chapter 11", passage: "I drew them with cords of a man, with bands of love." },
  { name: "Joel", chapter: "Chapter 2", passage: "And it shall come to pass afterward, that I will pour out my Spirit upon all flesh." },
  { name: "Amos", chapter: "Chapter 5", passage: "Seek ye me, and ye shall live." },
  { name: "Obadiah", chapter: "Chapter 1", passage: "The house of Jacob shall be a fire, and the house of Joseph a flame." },
  { name: "Jonah", chapter: "Chapter 2", passage: "Then I cried unto the LORD my God out of the fish's belly." },
  { name: "Micah", chapter: "Chapter 6", passage: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" },
  { name: "Nahum", chapter: "Chapter 1", passage: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him." },
  { name: "Habakkuk", chapter: "Chapter 3", passage: "The LORD God is my strength, and he will make my feet like hinds' feet, and he will make me to walk upon mine high places." },
  { name: "Zephaniah", chapter: "Chapter 3", passage: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy." },
  { name: "Haggai", chapter: "Chapter 2", passage: "Be strong, O Zerubbabel, saith the LORD; and be strong, O Joshua, son of Josedech, the high priest; and be strong, all ye people of the land, saith the LORD, and work: for I am with you, saith the LORD of hosts." },
  { name: "Zechariah", chapter: "Chapter 4", passage: "Not by might, nor by power, but by my Spirit, saith the LORD of hosts." },
  { name: "Malachi", chapter: "Chapter 3", passage: "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts." },
  { name: "Matthew", chapter: "Chapter 5", passage: "Blessed are the poor in spirit: for theirs is the kingdom of heaven." },
  { name: "Mark", chapter: "Chapter 10", passage: "Of such is the kingdom of God." },
  { name: "Luke", chapter: "Chapter 2", passage: "Glory to God in the highest, and on earth peace, good will toward men." },
  { name: "John", chapter: "Chapter 1", passage: "In the beginning was the Word, and the Word was with God, and the Word was God." },
  { name: "Acts", chapter: "Chapter 1", passage: "But ye shall receive power, after that the Holy Ghost is come upon you." },
  { name: "Romans", chapter: "Chapter 8", passage: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things to come." },
  { name: "1 Corinthians", chapter: "Chapter 13", passage: "And now abideth faith, hope, charity, these three; but the greatest of these is charity." },
  { name: "2 Corinthians", chapter: "Chapter 5", passage: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." },
  { name: "Galatians", chapter: "Chapter 5", passage: "Stand fast therefore in the liberty wherewith Christ hath made us free." },
  { name: "Ephesians", chapter: "Chapter 3", passage: "Now unto him that is able to do exceeding abundantly above all that we ask or think." },
  { name: "Philippians", chapter: "Chapter 4", passage: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God." },
  { name: "Colossians", chapter: "Chapter 3", passage: "Set your affection on things above, not on things on the earth." },
  { name: "1 Thessalonians", chapter: "Chapter 5", passage: "Rejoice evermore." },
  { name: "2 Thessalonians", chapter: "Chapter 3", passage: "The Lord is faithful, who shall establish you, and keep you from evil." },
  { name: "1 Timothy", chapter: "Chapter 6", passage: "But godliness with contentment is great gain." },
  { name: "2 Timothy", chapter: "Chapter 1", passage: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind." },
  { name: "Titus", chapter: "Chapter 2", passage: "For the grace of God that bringeth salvation hath appeared to all men." },
  { name: "Philemon", chapter: "Chapter 1", passage: "The grace of our Lord Jesus Christ be with your spirit." },
  { name: "Hebrews", chapter: "Chapter 11", passage: "Now faith is the substance of things hoped for, the evidence of things not seen." },
  { name: "James", chapter: "Chapter 1", passage: "Every good gift and every perfect gift is from above, and cometh down from the Father of lights." },
  { name: "1 Peter", chapter: "Chapter 5", passage: "Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time." },
  { name: "2 Peter", chapter: "Chapter 1", passage: "Add to your faith virtue; and to virtue knowledge." },
  { name: "1 John", chapter: "Chapter 1", passage: "God is light, and in him is no darkness at all." },
  { name: "2 John", chapter: "Chapter 1", passage: "And this is love, that we walk after his commandments." },
  { name: "3 John", chapter: "Chapter 1", passage: "I have no greater joy than to hear that my children walk in truth." },
  { name: "Jude", chapter: "Chapter 1", passage: "Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life." },
  { name: "Revelation", chapter: "Chapter 21", passage: "And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away." }
];

const demoAccount = { username: "Prince AMO", gmail: "princeamo@gmail.com" };

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from local storage.`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save ${key} to local storage.`, error);
    showToast("Your browser couldn’t save that just now.");
  }
}

let savedVerses = readStorage(storageKeys.saved, []);
let userReactions = readStorage(storageKeys.reactions, {});
let activeTopic = "All";
let searchQuery = "";
let savedOnly = false;
let toastTimer;

const verseGrid = document.getElementById("verse-grid");
const searchInput = document.getElementById("search-input");
const emptyState = document.getElementById("empty-state");
const toast = document.getElementById("toast");
const savedCount = document.getElementById("saved-count");
const authModal = document.getElementById("auth-modal");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const profileButton = document.getElementById("profile-button");
const authTitle = document.getElementById("auth-title");
const authSubmit = document.getElementById("auth-submit");
const authUsername = document.getElementById("auth-username");
const authGmail = document.getElementById("auth-gmail");
const greetingHeading = document.getElementById("greeting-heading");
const welcomeCopy = document.getElementById("welcome-copy");
const bookList = document.getElementById("book-list");
const selectedBook = document.getElementById("selected-book");
const selectedChapter = document.getElementById("selected-chapter");
const biblePassage = document.getElementById("bible-passage");

let activeAuthMode = "login";
let currentUser = null;

function updateGreeting() {
  const hour = new Date().getHours();
  let label = "morning";
  let greeting = "Good morning";
  let note = "Whatever you’re carrying today, there’s a little wisdom here for you.";

  if (hour >= 12 && hour < 17) {
    label = "afternoon";
    greeting = "Good afternoon";
    note = "There is still room for peace, purpose, and a gentle reset.";
  } else if (hour >= 17) {
    label = "evening";
    greeting = "Good evening";
    note = "Let your heart come to rest and your mind breathe a little deeper.";
  }

  const audience = currentUser ? currentUser.split(" ")[0] : "friend";
  greetingHeading.innerHTML = `${greeting}, ${audience}<span class="heading-spark">✳</span>`;
  welcomeCopy.textContent = note;
  document.body.dataset.timeOfDay = label;
}

function renderBibleLibrary() {
  bookList.innerHTML = "";

  bibleLibrary.forEach((book) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "book-button";
    button.textContent = book.name;
    button.addEventListener("click", () => {
      document.querySelectorAll(".book-button").forEach((item) => item.classList.toggle("active", item === button));
      selectedBook.textContent = book.name;
      selectedChapter.textContent = book.chapter;
      biblePassage.textContent = book.passage;
    });
    bookList.append(button);
  });

  const firstBook = bibleLibrary[0];
  selectedBook.textContent = firstBook.name;
  selectedChapter.textContent = firstBook.chapter;
  biblePassage.textContent = firstBook.passage;
  const firstButton = bookList.querySelector(".book-button");
  if (firstButton) {
    firstButton.classList.add("active");
  }
}

function openAuthModal(mode = "login") {
  activeAuthMode = mode;
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  document.querySelectorAll(".auth-tab").forEach((tab) => {
    const isActive = tab.dataset.authMode === mode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  authTitle.textContent = mode === "login" ? "Sign in with your details" : "Create your account";
  authSubmit.textContent = mode === "login" ? "Log in" : "Create account";
  authUsername.value = currentUser ? currentUser : demoAccount.username;
  authGmail.value = currentUser ? "" : demoAccount.gmail;
  authUsername.focus();
}

function closeAuthModal() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
}

function loginWithAccount(username, gmail) {
  const safeUsername = username.trim();
  const safeGmail = gmail.trim();

  if (safeUsername.toLowerCase() === demoAccount.username.toLowerCase() && safeGmail.toLowerCase() === demoAccount.gmail.toLowerCase()) {
    currentUser = demoAccount.username;
    updateGreeting();
    const profileText = currentUser.split(" ").map((part) => part[0]).join("").toUpperCase();
    profileButton.textContent = profileText;
    showToast(`Welcome back, ${currentUser}.`);
    closeAuthModal();
    return true;
  }

  showToast("Use Prince AMO and princeamo@gmail.com to sign in.");
  return false;
}

function getVisibleVerses() {
  return verses.filter((verse) => {
    const matchesTopic = activeTopic === "All" || verse.topics.includes(activeTopic);
    const matchesSaved = !savedOnly || savedVerses.includes(verse.id);
    const searchText = `${verse.reference} ${verse.topic} ${verse.topics.join(" ")} ${verse.text} ${verse.explanation} ${verse.practice}`.toLowerCase();
    return matchesTopic && matchesSaved && searchText.includes(searchQuery.toLowerCase());
  });
}

function renderVerses() {
  const visibleVerses = getVisibleVerses();
  verseGrid.replaceChildren();
  emptyState.hidden = visibleVerses.length !== 0;
  verseGrid.hidden = visibleVerses.length === 0;

  visibleVerses.forEach((verse) => {
    const saved = savedVerses.includes(verse.id);
    const reaction = userReactions[verse.id];
    const heartCount = verse.reactions.heart + (reaction === "heart" ? 1 : 0);
    const helpfulCount = verse.reactions.helpful + (reaction === "helpful" ? 1 : 0);
    const card = document.createElement("article");
    card.className = "verse-card";
    card.id = `verse-${verse.id}`;
    card.innerHTML = `
      <div class="card-topline">
        <span class="card-topic">${verse.topic}</span>
        <button class="save-button ${saved ? "is-saved" : ""}" type="button" data-action="save" data-id="${verse.id}" aria-label="${saved ? "Remove saved verse" : "Save verse"}" aria-pressed="${saved}" title="${saved ? "Remove saved verse" : "Save verse"}">${saved ? "♥" : "♡"}</button>
      </div>
      <blockquote>${verse.text}</blockquote>
      <span class="card-reference">${verse.reference} · KING JAMES VERSION</span>
      <p class="card-explanation">${verse.explanation}</p>
      <div class="card-practice"><strong>TRY THIS TODAY</strong><br>${verse.practice}</div>
      <div class="card-footer">
        <span class="reaction-prompt">How does this meet you?</span>
        <div class="reaction-buttons" role="group" aria-label="React to ${verse.reference}">
          <button class="reaction-button ${reaction === "heart" ? "reacted" : ""}" type="button" data-action="react" data-reaction="heart" data-id="${verse.id}" aria-label="This verse speaks to me, ${heartCount} reactions" aria-pressed="${reaction === "heart"}"><span aria-hidden="true">♡</span> ${heartCount}</button>
          <button class="reaction-button ${reaction === "helpful" ? "reacted" : ""}" type="button" data-action="react" data-reaction="helpful" data-id="${verse.id}" aria-label="This verse is helpful, ${helpfulCount} reactions" aria-pressed="${reaction === "helpful"}"><span aria-hidden="true">✳</span> ${helpfulCount}</button>
        </div>
      </div>`;
    verseGrid.append(card);
  });

  savedCount.textContent = String(savedVerses.length);
  document.getElementById("hero-save").classList.toggle("is-saved", savedVerses.includes("matthew-1128"));
  document.getElementById("hero-save").textContent = savedVerses.includes("matthew-1128") ? "♥" : "♡";
  document.getElementById("hero-save").setAttribute("aria-pressed", String(savedVerses.includes("matthew-1128")));
  document.getElementById("hero-save").setAttribute("aria-label", savedVerses.includes("matthew-1128") ? "Remove today's verse from saved verses" : "Save today's verse");
  document.getElementById("results-label").textContent = savedOnly
    ? `${visibleVerses.length} SAVED ${visibleVerses.length === 1 ? "VERSE" : "VERSES"}`
    : searchQuery || activeTopic !== "All"
      ? `${visibleVerses.length} ${visibleVerses.length === 1 ? "VERSE" : "VERSES"} FOR YOU`
      : "A MOMENT OF REFLECTION";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function toggleSaved(id) {
  if (savedVerses.includes(id)) {
    savedVerses = savedVerses.filter((savedId) => savedId !== id);
    showToast("Removed from your saved verses.");
  } else {
    savedVerses = [...savedVerses, id];
    showToast("Saved for another quiet moment.");
  }
  writeStorage(storageKeys.saved, savedVerses);
  renderVerses();
}

document.querySelector(".topic-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  activeTopic = button.dataset.topic;
  savedOnly = false;
  document.querySelectorAll(".topic-chip").forEach((chip) => chip.classList.toggle("selected", chip === button));
  document.getElementById("saved-nav").classList.remove("active");
  renderVerses();
  document.getElementById("readings").scrollIntoView({ behavior: "smooth", block: "start" });
});

verseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  if (button.dataset.action === "save") {
    toggleSaved(button.dataset.id);
    return;
  }

  const { id, reaction } = button.dataset;
  userReactions[id] = userReactions[id] === reaction ? null : reaction;
  writeStorage(storageKeys.reactions, userReactions);
  renderVerses();
});

document.getElementById("hero-save").addEventListener("click", () => toggleSaved("matthew-1128"));
document.getElementById("read-reflection").addEventListener("click", () => {
  document.getElementById("verse-matthew-1128")?.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast("A little reminder: you don’t have to carry it all alone.");
});

document.getElementById("clear-filter").addEventListener("click", () => {
  activeTopic = "All";
  savedOnly = false;
  searchInput.value = "";
  searchQuery = "";
  document.querySelectorAll(".topic-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.topic === "All"));
  document.getElementById("saved-nav").classList.remove("active");
  renderVerses();
});

document.getElementById("saved-nav").addEventListener("click", (event) => {
  event.preventDefault();
  savedOnly = true;
  activeTopic = "All";
  document.querySelectorAll(".topic-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.topic === "All"));
  document.getElementById("saved-nav").classList.add("active");
  renderVerses();
  document.getElementById("readings").scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.trim();
  savedOnly = false;
  document.getElementById("saved-nav").classList.remove("active");
  renderVerses();
});

loginButton.addEventListener("click", () => openAuthModal("login"));
signupButton.addEventListener("click", () => openAuthModal("signup"));
profileButton.addEventListener("click", () => openAuthModal("login"));
profileButton.textContent = "PA";

document.querySelectorAll(".auth-tab").forEach((tab) => {
  tab.addEventListener("click", () => openAuthModal(tab.dataset.authMode));
});

document.getElementById("close-auth-modal").addEventListener("click", closeAuthModal);
authModal.addEventListener("click", (event) => {
  if (event.target === authModal) {
    closeAuthModal();
  }
});

document.getElementById("auth-form").addEventListener("submit", (event) => {
  event.preventDefault();
  loginWithAccount(authUsername.value, authGmail.value);
});

document.getElementById("library-reset").addEventListener("click", () => {
  document.getElementById("bible-library").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    searchQuery = "";
    searchInput.blur();
    renderVerses();
  }

  if (event.key === "Escape" && authModal.classList.contains("open")) {
    closeAuthModal();
  }
});

const date = new Date();
document.getElementById("today-date").textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date).toUpperCase();

renderBibleLibrary();
updateGreeting();
renderVerses();
