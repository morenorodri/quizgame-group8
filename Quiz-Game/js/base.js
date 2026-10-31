// elements
const themeToggle = document.querySelector(".js-themeToggle"); 

const dialogElement = document.querySelector("#dialogInfo");
const openDialogBtn = document.querySelector("#openDialogInfo");
const closeDialogBtn = document.querySelector("#closeDialogInfo");

const toplistButton = document.querySelector(".js-toplistBtn");


// events
themeToggle.addEventListener("click", () => {
    toggleTheme()
})


openDialogBtn.addEventListener("click", () => {
    dialogElement.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    dialogElement.close();
});

toplistButton.addEventListener("click", () => {
    window.location.href = "leading-board.html";
});



// functions
function toggleTheme() {
    const toggleStatus = themeToggle.getAttribute("aria-pressed") === "false";

    if (toggleStatus === false) {
        setLightTheme();
    
    } else if (toggleStatus === true) {
        setDarkTheme();
    }
}

function setDarkTheme() {
    themeToggle.setAttribute("aria-pressed", true);
    document.body.classList.add("dark-theme");
    themeToggle.innerHTML = `<img src="./img/sun-light-icon.svg" alt="a sun for light mode switch"> `;
}

function setLightTheme() {
    themeToggle.setAttribute("aria-pressed", false);
    document.body.classList.remove("dark-theme");
    themeToggle.innerHTML = `<img src="./img/moon-light-icon.svg" alt="a moon for dark mode switch"> `;    
}