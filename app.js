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
});

const date = new Date();
document.getElementById("today-date").textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric"
}).format(date).toUpperCase();

renderVerses();
