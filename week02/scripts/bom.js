const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const addToList = () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = input.value;
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => removeFromList(li));
    li.append(deleteButton);
    list.appendChild(li);
  }

  input.focus();
  input.value = "";
};

const removeFromList = (li) => {
  list.removeChild(li);
  input.focus();
  input.value = "";
};

button.addEventListener("click", addToList);
