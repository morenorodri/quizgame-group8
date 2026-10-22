// Timer
const duration = 20;

const timerText = document.querySelector(".timer-text");

let remaining = duration;


function updateTimer() {
    timerText.textContent = `${remaining}s`;

    if (remaining <= 0) {
        clearInterval(timer);
        return;
    }

    remaining--;
}

const timer = setInterval(updateTimer, 1000);

updateTimer();

// The quiz
let questions = [];
let currentQuestion = 0;
let score = 0;

const questionText = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answer");

async function loadQuestions() {
    const response = await fetch("questions.json");
    const data = await response.json();


    questions = data;
    showQuestion();
}
loadQuestions()

function showQuestion() {
    const question = questions[currentQuestion];

    questionText.textContent = question.question;

    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index];

        button.onclick = () => {
            checkAnswer(index);
        };
    });
}


function checkAnswer(answerIndex) {

    const question = questions[currentQuestion];

    if (answerIndex === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}


function finishQuiz() {
    console.log("Quiz finished!");
    console.log("Score:", score);
}