const taskArray = ["Do homework", "Clean dishes", "Throw dishes"];
renderTaskGrid();

function AddTask() {
  const inputElement = document.querySelector(".js-task-input");
  taskArray.push(inputElement.value);
  console.log(taskArray);
  renderTaskGrid();
}

function renderTaskGrid() {
  let html = "";
  taskArray.forEach((task, index) => {
    html += `
    <ul class="task-row">
      ${task}
      <button 
        class="task-button delete-button" 
        onclick="deleteTask(${index})"
      >Supprimer</button>

      <button 
        class="task-button finish-button js-finish-button" 
        onclick="finishTask(${index})"
      >Terminer</button>
    </ul>`;
  });
  const taskGrid = document.querySelector(".js-tasks-list");
  taskGrid.innerHTML = html;
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  renderTaskGrid();
}

function finishTask(index) {}
