
const playerName = document.getElementById("player-name");
const correctAnswers = document.getElementById("correct-answers");
const totalPoints = document.getElementById("total-points");

// Get saved data from localstorage
const name = localStorage.getItem("playerName") || "Player";
const correct = Number(localStorage.getItem("correctAnswers") || 0);
const questions = Number(localStorage.getItem("totalQuestions") || 10);
const points = Number(localStorage.getItem("totalPoints") || 0);

// Show results on the page
playerName.textContent = name;
correctAnswers.textContent = `${correct} / ${questions}`;
totalPoints.textContent = points;
