
const players = [
  { name: "Player 1", correct: 8, score: 800 },
  { name: "Player 2", correct: 7, score: 700 },
  { name: "Player 3", correct: 6, score: 600 },
  { name: "Player 4", correct: 5, score: 500 },
  { name: "Player 5", correct: 4, score: 400 }
];

const leaderBoard = document.querySelector("#leaderboard-list");

players.sort((a, b) => b.score - a.score);

if (players.length === 0) {
  leaderBoard.textContent = "No players yet. Play a quiz to appear here!";
}

players.forEach((player, index) => {
  const item = document.createElement("li");
  item.classList.add("leaderboard-item");

  const rank = document.createElement("span");
  rank.textContent = index + 1;
  rank.classList.add("player-rank");

  
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

  playerInfo.append(name, correct);
  item.append(rank, playerInfo, score);
  leaderBoard.append(item);
});

const backButton = document.querySelector("#back-button");

backButton.addEventListener("click", () => {
  window.history.back();
});