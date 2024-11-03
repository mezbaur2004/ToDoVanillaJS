document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
    
    if (taskValue !== "") {
        addTask(taskValue);
        taskInput.value = ""; // Clear input after adding
    } else {
        alert("Please enter a task.");
    }
});

function addTask(task) {
    const taskList = document.getElementById("taskList");
    
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
