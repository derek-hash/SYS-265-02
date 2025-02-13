const taskInput = document.getElementById('task-title');
const descInput = document.getElementById('task-description');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Fetch and display tasks from backend
async function fetchTasks() {
    const response = await fetch('http://localhost:5000/tasks');
    const tasks = await response.json();
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.title}: ${task.description} 
                        <button onclick="completeTask(${task.id})">Complete</button> 
                        <button onclick="deleteTask(${task.id})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Add a new task
addTaskBtn.addEventListener('click', async () => {
    const taskData = { title: taskInput.value, description: descInput.value };
    await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskData)
    });
    fetchTasks();
    taskInput.value = '';
    descInput.value = '';
});

// Mark task as completed
async function completeTask(taskId) {
    await fetch(`http://localhost:5000/tasks/${taskId}/complete`, { method: 'PATCH' });
    fetchTasks();
}

// Delete task
async function deleteTask(taskId) {
    await fetch(`http://localhost:5000/tasks/${taskId}`, { method: 'DELETE' });
    fetchTasks();
}

// Load tasks on page load
window.onload = fetchTasks;
