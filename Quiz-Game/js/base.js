// elements

const dialogElement = document.querySelector("#dialogInfo");
const openDialogBtn = document.querySelector("#openDialogInfo");
const closeDialogBtn = document.querySelector("#closeDialogInfo");

const toplistButton = document.querySelector(".js-toplistBtn");


// events


openDialogBtn.addEventListener("click", () => {
    dialogElement.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    dialogElement.close();
});

toplistButton.addEventListener("click", () => {
    window.location.href = "leading-board.html";
});



