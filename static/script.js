function addTask() {
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    if (title.trim() !== '') {
        var task = {
            title: title,
            description: description
        };
        displayTask(task);
        saveTask(task);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please enter a task title.');
    }
}

function displayTask(task) {
    var taskList = document.getElementById('task-list');
    var taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = '<h3>' + task.title + '</h3><p>' + task.description + '</p>';
    
    // Create a delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete This Task';
    deleteButton.onclick = function() {
        deleteTask(taskDiv);
    };
    
    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);
}

function deleteTask(taskDiv) {
    taskDiv.remove();
    // Here you would also send a request to the server to delete the task from the database
}

function saveTask(task) {
    // Here you would send the task data to the server to save it in the database
}
