document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    async function fetchTasks() {
        const response = await fetch("http://localhost:5000/tasks");
        const tasks = await response.json();
        taskList.innerHTML = "";
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `${task.title} <button onclick="toggleTask(${task.id})">${task.completed ? "Undo" : "Complete"}</button> <button onclick="deleteTask(${task.id})">Delete</button>`;
            taskList.appendChild(li);
        });
    }

    taskForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const taskTitle = taskInput.value;
        if (!taskTitle.trim()) return;
        await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: taskTitle }),
        });
        taskInput.value = "";
        fetchTasks();
    });

    window.toggleTask = async function (id) {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "PUT" });
        fetchTasks();
    };

    window.deleteTask = async function (id) {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
        fetchTasks();
    };

    fetchTasks();
});
