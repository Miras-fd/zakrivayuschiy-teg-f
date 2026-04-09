const saveButton = document.querySelector("#save-button");
const dialog = document.querySelector("#save-dialog");
const dialogButton = dialog.querySelector(".dialog__button");

saveButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogButton.addEventListener("click", () => {
  dialog.close();
});