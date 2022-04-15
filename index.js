let inputBox = document.getElementById("inputBox");
let submitButton = document.getElementById("submitButton");
let toDoList = document.getElementById("toDoList");

function createToDo(event) {
  event.preventDefault();
  let text = inputBox.value;
  if (text === "") {
    return;
  }

  let div = document.createElement("div");

  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph");
  paragraph.textContent = text;

  div.appendChild(paragraph);
  div.appendChild(checkbox);
  toDoList.appendChild(div);

  inputBox.value = "";
}

submitButton.addEventListener("click", createToDo);
