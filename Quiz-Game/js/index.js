/*** elements ***/
const attentionContent = document.querySelector(".js-errorLine");
const attentionLine = document.querySelector("#error-playerName");
const formPlayerName = document.querySelector("#formPlayerName");
const inputPlayerName = document.querySelector("#inputPlayerName");
const buttonSubmitName = document.querySelector("#buttonSubmitName");



/*** events ***/
inputPlayerName.addEventListener("focus", (event) => { 
    focusInputField()
});
inputPlayerName.addEventListener("blur", (event) => { 
    blurInputField()
});

buttonSubmitName.addEventListener("click", (event) => { 
    event.preventDefault(); 
    startQuiz();
});



/*** variables ***/
let playerDetails = [];
const playing = true;


/*** functions ***/
function focusInputField() {
    inputPlayerName.placeholder = "";
}

function blurInputField() {
    if (inputPlayerName.value === "") {
        inputPlayerName.placeholder = "Type in your name here"; 
        attentionContent.style.visibility = "hidden";
    }
}


function startQuiz() {
    const submitPlayerName = inputPlayerName.value.trim();
    const validPattern = /^[a-zA-Z0-9åäöÅÄÖ\s]+$/;
    console.log(submitPlayerName);

    if (playing) {
        /* show a attention text */
        if (submitPlayerName === "") {
            attentionContent.style.visibility = "visible";
            attentionLine.textContent = "Please, type in a name";

        } else if (!validPattern.test(submitPlayerName)) {
            attentionContent.style.visibility = "visible";
            attentionLine.textContent = "Only letters and numbers are allowed";
        
        } else { 
            /* create a new player item */
            playerDetails.push({
                playerId: playerDetails.length + 1,
                playerName: submitPlayerName,
                correctAnswers: 0,
                gamePoints: 0,
            });

            inputPlayerName.value = "";
            attentionContent.style.visibility = "hidden";
        };
    };

    console.log(playerDetails);
}