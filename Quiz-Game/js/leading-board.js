// Get saved players from localStorage
const players = JSON.parse(localStorage.getItem("players")) || [];

const leaderBoard = document.querySelector("#leaderboard-list");

// Sort players from highest score to lowest
players.sort((a, b) => b.score - a.score);

// Show a message if there are no players
if (players.length === 0) {
  leaderBoard.innerHTML = 
    <p>No players yet.</p>
    <a href="index.html">Play a quiz</a>
} else {
  // Display each player
  players.forEach((player, index) => {
    const item = document.createElement("li");
    item.classList.add("leaderboard-item");

    // Player rank
    const rank = document.createElement("span");
    rank.textContent = index + 1;
    rank.classList.add("player-rank");

    // Player information
    const playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    const name = document.createElement("span");
    name.textContent = player.name;
    name.classList.add("player-name");

    const correct = document.createElement("span");
    correct.textContent = `${player.correct} / 10 Correct`;
    correct.classList.add("player-correct");

    const score = document.createElement("span");
    score.textContent = `${player.score} Points`;
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
const backButton = document.querySelector("#back-button");

if (backButton) {
  backButton.addEventListener("click", () => {
    window.history.back();
  });
}