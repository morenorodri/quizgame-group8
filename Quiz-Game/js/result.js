
/* Result page */

// Get HTML elements
const playerName = document.getElementById("player-name");
const correctAnswers = document.getElementById("correct-answers");
const totalPoints = document.getElementById("total-points");

// Get saved results from localStorage
const playerStats = JSON.parse(localStorage.getItem("playerStats")) || [];

// Check if there is a saved result
if (playerStats.length > 0) {

    // Get the latest result
   const latestPlayer = playerStats[playerStats.length - 1];

    // Get player information
    playerName.textContent = latestPlayer.playerName || "Player";
    correctAnswers.textContent = `${latestPlayer.questionsCorrect} / 10`;
    totalPoints.textContent = latestPlayer.totalScore;

} else {

    // Show default values if there is no result
    playerName.textContent = "Player";
    correctAnswers.textContent = "0 / 10";
    totalPoints.textContent = "0";

}
