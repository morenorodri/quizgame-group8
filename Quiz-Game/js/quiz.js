
const duration = 20;
const timerText = document.querySelector(".timer-text");
const timerProgress = document.querySelector(".timer-progress");

const questionText = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answer");
const questionCounter = document.querySelector(".question-count");

const closeButton = document.querySelector(".close-btn");

let remaining = duration;
let timer;

let questions = [];
let currentQuestion = 0;
let questionCounterNumber = 1;
let questionsCorrect = 0;
let totalScore = 0;

function startTimer() {
    clearInterval(timer);

    remaining = duration;
    timerText.textContent = `${remaining}s`;

    timerProgress.style.animation = "none";
    timerProgress.offsetHeight;
    timerProgress.style.animation = `timerFlow ${duration}s linear forwards`;
    timer = setInterval(() => {
        remaining--;
        timerText.textContent = `${remaining}s`;

        if (remaining <= 0) {
            clearInterval(timer);

            currentQuestion++;
            questionCounterNumber++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                finishQuiz();
            }
        }
    }, 1000);
}

async function loadQuestions() {
    const response = await fetch("questions.json");
    const data = await response.json();

    questions = data;
    showQuestion();
}
loadQuestions();

function showQuestion() {
    const question = questions[currentQuestion];

    questionText.textContent = question.question;
    questionCounter.textContent = `Question ${questionCounterNumber} / 10`;

    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];

        button.onclick = () => {
            checkAnswer(index);
        };
    });
    startTimer();
}

function checkAnswer(answerIndex) {
    clearInterval(timer);

    const question = questions[currentQuestion];

    if (answerIndex === question.correct) {
        questionsCorrect++;

        const questionScore = remaining;
        totalScore += questionScore;

        console.log(totalScore);
    }

    currentQuestion++;
    questionCounterNumber++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}


function finishQuiz() {
    clearInterval(timer);

    const player = {
        playerName: localStorage.getItem("playerName"),
        totalScore: totalScore,
        questionsCorrect: questionsCorrect
    }

    let playerStats = JSON.parse(localStorage.getItem("playerStats")) || [];
    playerStats.push(player);

    localStorage.setItem("playerStats", JSON.stringify(playerStats))

    console.log("Quiz finished!");
    console.log("Correct:", questionsCorrect);
    console.log("Score:", totalScore);
    window.location.href = "result.html";
}

closeButton.addEventListener("click", () => {
    clearInterval(timer);

    remaining = duration;
    currentQuestion = 0;
    questionCounterNumber = 1;
    questionsCorrect = 0;
    totalScore = 0;

    timerText.textContent = `${duration}s`;
    timerProgress.style.animation = "none";

    window.location.href = "index.html";
});