/*** elements ***/
const attentionContent = document.querySelector(".js-errorLine");
const attentionLine = document.querySelector("#error-playerName");
const formPlayerName = document.querySelector("#formPlayerName");
const inputPlayerName = document.querySelector("#inputPlayerName");
const buttonSubmitName = document.querySelector("#buttonSubmitName");



/*** events ***/
inputPlayerName.addEventListener("focus", focusInputField);
// inputPlayerName.addEventListener("click", clickInputField);
inputPlayerName.addEventListener("blur", blurInputField);

buttonSubmitName.addEventListener("click", (event) => { 
    event.preventDefault(); 
    getPlayerName();
});



/*** variables ***/
const playing = true;



/*** functions ***/
// function clickInputField() { inputPlayerName.style.outline = "none"; }
function focusInputField() { inputPlayerName.placeholder = ""; }
function blurInputField() {
    if (inputPlayerName.value === "") {
        inputPlayerName.placeholder = "Type in your name here"; 
        attentionContent.style.visibility = "hidden";
    }
}


function getPlayerName() {
    const submitPlayerName = inputPlayerName.value.trim().replace(/\s+/g, ' ');
    const validPattern = /^[a-zA-Z0-9åäöÅÄÖ\s]+$/;

    if (playing) {
        // check if a name is valid
        if (!submitPlayerName) {
            attentionText("Please, type in a name");
            return;

        } else if (!validPattern.test(submitPlayerName)) {
            attentionText("Only letters and numbers are allowed");
            return;
        }

        // show a attention text if name not valid or handle the name
        function attentionText(message) {
            attentionLine.textContent = message;
            attentionContent.style.visibility = "visible";
        }
        

        // player named saved in localStorge for to be handle in the next quiz page
        localStorage.setItem("playerName", submitPlayerName);
        inputPlayerName.value = "";
        attentionContent.style.visibility = "hidden";
        
        window.location.href = "quiz.html";
    };
}
