// Get saved players from localStorage
const players = JSON.parse(localStorage.getItem("playerStats")) || [];

// Keep only each player's best score
const bestPlayers = Object.values(
  players.reduce((result, player) => {
    const name = player.playerName.trim().toLowerCase();

    if (
      !result[name] ||
      player.totalScore > result[name].totalScore
    ) {
      result[name] = player;
    }

    return result;
  }, {})
);

const leaderBoard = document.querySelector("#leaderboard-list");

// Sort players from highest score to lowest
bestPlayers.sort((a, b) => b.totalScore - a.totalScore);

// Show a message if there are no players
if (bestPlayers.length === 0) {
  leaderBoard.innerHTML = `
    <p>No players yet.</p>
    <a href="./index.html" class="play-quiz-link">Play a quiz again</a>
  `;
} else {
  // Display each player
  bestPlayers.forEach((player, index) => {
    const item = document.createElement("li");
    item.classList.add("leaderboard-item");

    // Player rank
    const rank = document.createElement("span");
    rank.textContent = index + 1;
    rank.classList.add("player-rank");

    // Player information
    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    // Player name
    const name = document.createElement("span");
    name.textContent = player.playerName;
    name.classList.add("player-name");

    // Correct answers
    const correct = document.createElement("span");
    correct.textContent = `${player.questionsCorrect} / 10 Correct`;
    correct.classList.add("player-correct");

    // Total score
    const score = document.createElement("span");
    score.textContent = `${player.totalScore} Points`;
    score.classList.add("player-score");

    // Add a class based on the player's rank
    if (index === 0) {
      item.classList.add("first-place");
    } else if (index === 1) {
      item.classList.add("second-place");
    } else if (index === 2) {
      item.classList.add("third-place");
    } else if (index === 3) {
      item.classList.add("fourth-place");
    } else if (index === 4) {
      item.classList.add("fifth-place");
    } else {
      item.classList.add("other-place");
    }

    // Assemble the player card
    playerInfo.append(name, correct);
    item.append(rank, playerInfo, score);
    leaderBoard.append(item);
  });
}

// Back button
const backButton = document.querySelector(".back-button");

if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}
// Reset leaderboard
const resetButton = document.querySelector("#reset-leaderboard");

if (resetButton) {
  resetButton.addEventListener("click", () => {
    const confirmReset = confirm(
      "Are you sure you want to clear all leaderboard results?"
    );

    if (confirmReset) {
      localStorage.removeItem("playerStats");
      location.reload();
    }
  });
}
// Dark mode toggle
const themeToggle = document.querySelector("#theme-toggle");

if (themeToggle) {
  // Restore the saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "L";
    themeToggle.setAttribute("aria-label", "Switch to light mode");
    themeToggle.setAttribute("aria-pressed", "true");
  }

  themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    themeToggle.textContent = isDarkMode ? "L" : "D";
    themeToggle.setAttribute(
      "aria-label",
      isDarkMode ? "Switch to light mode" : "Switch to dark mode"
    );
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
  });
}