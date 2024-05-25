const newItem = document.querySelector("#new-item");
const addBtn = document.querySelector("#add-button");
const shoppingList = document.querySelector("#shopping-list");

addBtn.addEventListener("click", () => {
  const newItemText = newItem.value;
  if (newItemText === "") {
    return;
  }
  const newItemElement = document.createElement("li");
  newItemElement.textContent = newItemText;
  shoppingList.appendChild(newItemElement);
  newItem.value = "";
  newItem.focus();
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    shoppingList.removeChild(newItemElement);
  });
  newItemElement.appendChild(deleteBtn);

});