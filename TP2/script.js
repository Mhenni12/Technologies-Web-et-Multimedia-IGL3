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
  taskArray.forEach((task) => {
    html += `<ul>${task}</ul>`;
  });
  const taskGrid = document.querySelector(".js-tasks-list");
  taskGrid.innerHTML = html;
}
