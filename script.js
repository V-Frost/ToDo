const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


function addTask() {        
    if (!taskInput.value.trim() ) {
        alert('Будь ласка, введіть завдання');
        return;
    }
    
    const taskItem = document.createElement('li');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('deleteButton');

        taskItem.textContent = taskInput.value;
        taskItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);
