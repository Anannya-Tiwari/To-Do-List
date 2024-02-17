// Array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        displayTasks();
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.style.textDecoration = task.completed ? 'line-through' : 'none';
        
        // Add click event to mark task as completed
        listItem.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        });

        // Add "Completed" next to task if completed
        if (task.completed) {
            const completedLabel = document.createElement('span');
            completedLabel.textContent = ' (Completed)';
            completedLabel.style.color = '#999'; // Optionally change color
            listItem.appendChild(completedLabel);
        }

        taskList.appendChild(listItem);
    });
}
