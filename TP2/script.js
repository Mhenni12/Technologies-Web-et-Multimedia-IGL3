// Get the taskArray from localStorage
let taskArray = JSON.parse(localStorage.getItem("taskArray")) || [
  {
    texte: "Do homework",
    etat: "terminee",
  },
  {
    texte: "Wash the dishes",
    etat: "non-terminee",
  },
];
// Display exisiting tasks initially
renderTaskGrid();

// Adding eventListener to the add button
const addButtonElement = document.querySelector(".js-add-button");
addButtonElement.addEventListener("click", () => {
  addTask();
});

function addTask() {
  const inputElement = document.querySelector(".js-task-input");
  const texte = inputElement.value;

  const taskObject = { texte: texte, etat: "non-terminee" };

  taskArray.push(taskObject);

  // Save array to local storage
  saveToLocalStorage();

  // Display the updated task list
  renderTaskGrid();

  // Deleting the task from the input element after adding it
  inputElement.value = "";
}

function renderTaskGrid() {
  let todoListHTML = "";

  taskArray.forEach((taskObject) => {
    const { texte, etat } = taskObject;

    todoListHTML += `
      <div class="text-display ${etat}">
        ${texte}
      </div>
      <button 
        class="task-button delete-button js-delete-button" 
      >Supprimer</button>

      <button 
        class="task-button finish-button js-finish-button" 
      >Terminer</button>
    `;
  });
  document.querySelector(".js-tasks-list").innerHTML = todoListHTML;

  displayTasksCount();

  // Adding eventListeners to the delete buttons
  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        deleteTask(index);
      });
    });

  // Adding eventListeners to the finish buttons
  document
    .querySelectorAll(".js-finish-button")
    .forEach((finishButton, index) => {
      finishButton.addEventListener("click", () => {
        finishTask(index);
      });
    });

  // Add an eventListener to delete all bytton
  document
    .querySelector(".js-delete-all-button")
    .addEventListener("click", () => {
      deleteAllTasks();
    });
}

function deleteTask(taskNumber) {
  taskArray.splice(taskNumber, 1);

  // Save array to local storage
  saveToLocalStorage();

  renderTaskGrid();
}

function finishTask(taskNumber) {
  taskArray[taskNumber].etat = "terminee";

  // Save array to local storage
  saveToLocalStorage();

  renderTaskGrid();
}

function saveToLocalStorage() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

function displayTasksCount() {
  let finishedTasks = 0;
  let unfinishedTasks = 0;

  taskArray.forEach((taskObject) => {
    if (taskObject.etat === "terminee") {
      finishedTasks++;
    } else {
      unfinishedTasks++;
    }
  });

  document.querySelector(".js-total-tasks").innerHTML = taskArray.length;
  document.querySelector(".js-finished-tasks").innerHTML = finishedTasks;
  document.querySelector(".js-unfinished-tasks").innerHTML = unfinishedTasks;
}

function deleteAllTasks() {
  taskArray = [];
  saveToLocalStorage();
  renderTaskGrid();
}
