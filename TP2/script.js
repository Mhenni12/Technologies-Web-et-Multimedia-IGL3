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
renderTaskGrid(taskArray);

// Adding eventListener to the add button
const addButtonElement = document.querySelector(".js-add-button");
addButtonElement.addEventListener("click", () => {
  addTask();
});

// Adding eventListener to the search input
const searchElement = document.querySelector(".js-task-search");

//! It won't work with arrow functions
searchElement.addEventListener("input", function () {
  // get the content of the input element at each key stroke
  const content = this.value.toLowerCase();

  // filter the tasks array to  get a new one
  const filteredTasks = taskArray.filter((task) => {
    return task.texte.toLowerCase().includes(content);
  });

  // Render the filtered list
  renderTaskGrid(filteredTasks);
});

function addTask() {
  const inputElement = document.querySelector(".js-task-input");
  const texte = inputElement.value;

  const taskObject = { texte: texte, etat: "non-terminee" };

  taskArray.push(taskObject);

  // Save array to local storage
  saveToLocalStorage();

  // Display the updated task list
  renderTaskGrid(taskArray);

  // Deleting the task from the input element after adding it
  inputElement.value = "";
}

function renderTaskGrid(taskList) {
  let todoListHTML = "";

  taskList.forEach((taskObject) => {
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

  renderTaskGrid(taskArray);
}

function finishTask(taskNumber) {
  taskArray[taskNumber].etat = "terminee";

  // Save array to local storage
  saveToLocalStorage();

  renderTaskGrid(taskArray);
}

function saveToLocalStorage() {
  localStorage.setItem("taskArray", JSON.stringify(taskArray));
}

function displayTasksCount() {
  let finishedTasks = 0;

  taskArray.forEach((taskObject) => {
    if (taskObject.etat === "terminee") {
      finishedTasks++;
    }
  });

  document.querySelector(".js-total-tasks").innerHTML = taskArray.length;
  document.querySelector(".js-finished-tasks").innerHTML = finishedTasks;
}

function deleteAllTasks() {
  taskArray = [];
  saveToLocalStorage();
  renderTaskGrid(taskArray);
}
