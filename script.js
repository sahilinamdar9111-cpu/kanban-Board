let taskId = 0;

// Add Task
function addTask(columnId) {
  const taskText = prompt("Enter task:");
  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";
  task.id = "task-" + taskId++;
  task.draggable = true;
  task.innerText = taskText;

  task.ondragstart = drag;

  document.getElementById(columnId).appendChild(task);
}

// Drag Functions
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const task = document.getElementById(data);
  ev.target.closest(".task-list").appendChild(task);
}
