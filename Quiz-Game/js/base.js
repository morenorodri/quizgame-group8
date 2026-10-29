// elements
const dialogElement = document.querySelector("#dialogInfo");
const openDialogBtn = document.querySelector("#openDialogInfo");
const closeDialogBtn = document.querySelector("#closeDialogInfo");


openDialogBtn.addEventListener("click", () => {
    dialogElement.showModal();
});

closeDialogBtn.addEventListener("click", () => {
    dialogElement.close();
});