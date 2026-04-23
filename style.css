let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let idCounter = tasks.length;

// Load tasks on start
window.onload = loadTasks;

// Create Task
function createTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) return;

  const task = {
    id: idCounter++,
    text,
    status: "todo",
    time: new Date().toLocaleString()
  };

  tasks.push(task);
  saveAndRender();
  input.value = "";
}

// Render Tasks
function loadTasks() {
  document.querySelectorAll(".task-list").forEach(el => el.innerHTML = "");

  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.draggable = true;
    div.id = task.id;

    div.innerHTML = `
      ${task.text}
      <small>${task.time}</small>
      <div class="task-actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    div.ondragstart = drag;

    document.getElementById(task.status).appendChild(div);
  });
}

// Save
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// Edit Task
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Edit task:", task.text);

  if (newText) {
    task.text = newText;
    saveAndRender();
  }
}

// Delete Task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveAndRender();
}

// Drag Drop
function drag(ev) {
  ev.dataTransfer.setData("id", ev.target.id);
}

document.querySelectorAll(".task-list").forEach(col => {
  col.ondragover = ev => ev.preventDefault();

  col.ondrop = ev => {
    const id = ev.dataTransfer.getData("id");
    const task = tasks.find(t => t.id == id);

    task.status = col.id;
    saveAndRender();
  };
});
