// elements
const dialogElement = document.querySelector("#dialogInfo");
const openDialogBtn = document.querySelector("#openDialogInfo");
const closeDialogBtn = document.querySelector("#closeDialogInfo");


// events
openDialogBtn.addEventListener("click", () => {
    dialogElement.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    dialogElement.close();
});

function openToplist() {
    window.location.href = "leading-board.html";
}

export { openToplist };