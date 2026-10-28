/*** elements ***/
const attentionContent = document.querySelector(".js-errorLine");
const attentionLine = document.querySelector("#error-playerName");
const formPlayerName = document.querySelector("#formPlayerName");
const inputPlayerName = document.querySelector("#inputPlayerName");
const buttonSubmitName = document.querySelector("#buttonSubmitName");



/*** events ***/
inputPlayerName.addEventListener("focus", focusInputField);
inputPlayerName.addEventListener("blur", blurInputField);

buttonSubmitName.addEventListener("click", (event) => { 
    event.preventDefault(); 
    getPlayerName();
});



/*** variables ***/
const playing = true;



/*** functions ***/
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
    let attentionMessage = "";

    if (playing) {
        // check if a name is valid
        if (!submitPlayerName) {
            attentionMessage = "Please, type in a name";

        } else if (!validPattern.test(submitPlayerName)) {
            attentionMessage = "Only letters and numbers are allowed";
        }

        // show a attention text if name not valid or handle the name
        if (attentionMessage) {
            attentionLine.textContent = attentionMessage;
            attentionContent.style.visibility = "visible";

        } else {
            // player named saved in localStorge for to be handle in the next quiz page
            localStorage.setItem("playerName", submitPlayerName);

            inputPlayerName.value = "";
            attentionContent.style.visibility = "hidden";
        }
    };
}