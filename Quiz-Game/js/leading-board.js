// Get saved players from localStorage
const savedPlayers = localStorage.getItem("playerStats");
let players = [];

try {
  players = savedPlayers ? JSON.parse(savedPlayers) : [];

  if (!Array.isArray(players)) {
    players = [];
  }
} catch (error) {
  console.error("Could not read saved player statistics:", error);
}

// Keep only each player's best score
const playerResults = players.reduce((result, player) => {
  // Skip invalid player records
  if (!player || typeof player.playerName !== "string") {
    return result;
  }

  const name = player.playerName.trim().toLowerCase();

  // Skip empty player names
  if (!name) {
    return result;
  }

  const score = Number(player.totalScore) || 0;

  // Keep the player's highest score
  if (!result[name] || score > (Number(result[name].totalScore) || 0)) {
    result[name] = player;
  }

  return result;
}, {});

// Convert the results into an array
const bestPlayers = Object.values(playerResults);

// ==========================================
// DISPLAY LEADERBOARD
// ==========================================

// Find the leaderboard element
const leaderBoard = document.querySelector("#leaderboard-list");

// Sort players from highest score to lowest
bestPlayers.sort(
  (a, b) => (Number(b.totalScore) || 0) - (Number(a.totalScore) || 0),
);

if (leaderBoard) {
  // Clear existing leaderboard entries
  leaderBoard.replaceChildren();

  // Display a message if there are no players
  if (bestPlayers.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No players yet. Play a quiz to appear here!";

    leaderBoard.appendChild(message);
  } else {
    // Display each player
    bestPlayers.forEach((player, index) => {
      const item = document.createElement("li");
      item.classList.add("leaderboard-item");

      // Player rank
      const rank = document.createElement("span");
      rank.textContent = String(index + 1);
      rank.classList.add("player-rank");

      // Player information container
      const playerInfo = document.createElement("div");
      playerInfo.classList.add("player-info");

      // Player name
      const name = document.createElement("span");
      name.textContent = player.playerName.trim();
      name.classList.add("player-name");

      // Correct answers
      const correct = document.createElement("span");
      const correctAnswers = Number(player.questionsCorrect) || 0;

      correct.textContent = `${correctAnswers} / 10 Correct`;
      correct.classList.add("player-correct");

      // Total score
      const score = document.createElement("span");
      score.textContent = `${Number(player.totalScore) || 0} Points`;
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
      leaderBoard.appendChild(item);
    });
  }
} else {
  console.error('Leaderboard element "#leaderboard-list" was not found.');
}

// ==========================================
// BACK BUTTON
// ==========================================

const backButton = document.querySelector(".back-button");

if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}

// ==========================================
// RESET LEADERBOARD
// ==========================================

const resetButton = document.querySelector("#reset-leaderboard");

if (resetButton) {
  resetButton.addEventListener("click", () => {
    const confirmReset = window.confirm(
      "Are you sure you want to clear all leaderboard results?",
    );

    if (confirmReset) {
      localStorage.removeItem("playerStats");
      window.location.reload();
    }
  });
} else {
  console.error('Reset button "#reset-leaderboard" was not found.');
}
