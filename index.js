let inputBox = document.getElementById("inputBox");
let submitButton = document.getElementById("submitButton");
let toDoList = document.getElementById("toDoList");

function createToDo(event) {
  event.preventDefault();
  let text = inputBox.value;
  if (text === "") {
    return;
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  let paragraph = document.createElement("span");
  paragraph.classList.add("paragraph");
  paragraph.textContent = text;

  li.appendChild(paragraph);
  li.appendChild(checkbox);
  toDoList.appendChild(li);

  inputBox.value = "";
}

submitButton.addEventListener("click", createToDo);
