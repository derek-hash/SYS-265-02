const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Fetch tasks from the backend when the page loads
window.onload = function() {
    fetchTasks();
}

// Fetch all tasks from the backend
function fetchTasks() {
    fetch('http://localhost:5000/tasks')
        .then(response => response.json())
        .then(tasks => {
            taskList.innerHTML = '';
            tasks.forEach(task => {
                addTaskToList(task);
            });
        });
}

// Add task when the "Add Task" button is clicked
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = { id: Date.now(), text: taskText };
        // Send task to backend
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(task => {
            addTaskToList(task);
            taskInput.value = ''; // Clear input field
        });
    }
});

// Add task to the list
function addTaskToList(task) {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;

    // Create delete button
    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
        taskItem.remove();
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}

// Delete task
function deleteTask(taskId) {
    fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: 'DELETE'
    });
}
