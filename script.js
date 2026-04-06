const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');




function addTask() {        
    if (!taskInput.value.trim()) {
        alert('Будь ласка, введіть завдання');
        return;
    }
    
    const taskItem = document.createElement('li');


    const span = document.createElement('span');
    span.textContent = taskInput.value;
    span.classList.add('task-text');
    
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonManage');
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✅';
    completeBtn.classList.add('completeButton');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('deleteButton');

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    taskItem.appendChild(span);
    taskItem.appendChild(buttonContainer);

    taskList.appendChild(taskItem);

    deleteBtn.addEventListener('click', function() {
        taskItem.remove();
    })

    taskInput.value = '';
    let isCompleted = false; 
    
    completeBtn.addEventListener('click', function() {
        if (!isCompleted) {

            completeBtn.textContent = '↩️';
            span.classList.add('completed');
            isCompleted = true;

        } else {

            completeBtn.textContent = '✅';
            span.classList.remove('completed');
            isCompleted = false;
          
        }
    })
}

addTaskButton.addEventListener('click', addTask);