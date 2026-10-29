// elements
const themeToggle = document.querySelector(".js-themeToggle"); 

const dialogElement = document.querySelector("#dialogInfo");
const openDialogBtn = document.querySelector("#openDialogInfo");
const closeDialogBtn = document.querySelector("#closeDialogInfo");


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



// functions
function toggleTheme() {
    const toggleStatus = themeToggle.getAttribute("aria-pressed") === "false";
    console.log(toggleStatus);

    if (toggleStatus === false) {
        setLightMode();
    
    } else if (toggleStatus === true) {
        setDarkMode();
    }
}

function setDarkMode() {
    themeToggle.setAttribute("aria-pressed", true);
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = `<img src="./img/sun-dark-icon.svg" alt="a sun for light mode switch"> `;
}

function setLightMode() {
    themeToggle.setAttribute("aria-pressed", false);
    document.body.classList.remove("dark-mode");
    themeToggle.innerHTML = `<img src="./img/moon-dark-icon.svg" alt="a moon for dark mode switch"> `;    
}