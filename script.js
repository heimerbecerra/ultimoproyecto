// Arreglo para almacenar las tareas
let tasks = [];

// Referencias a elementos HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Función para agregar una tarea
addTaskBtn.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    } else {
        alert("Escribe una tarea antes de agregar.");
    }
});

// Función para eliminar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Función para renderizar las tareas en la lista
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
