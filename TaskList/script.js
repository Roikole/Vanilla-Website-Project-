const inputText = document.getElementById('inputText');
const tasks = document.getElementById('tasks');
const addButton = document.getElementById('addButton');


addButton.addEventListener("click", () => {
    if (inputText.value === '') {
        alert("Add a task to complete!");
    } else {
        let taskList = document.createElement("li");
        taskList.innerHTML = inputText.value;
        tasks.appendChild(taskList);
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'X';
        taskList.appendChild(deleteButton);
    }

    inputText.value = '';
});

tasks.addEventListener("click", function(d) {
    if (d.target.tagName === "BUTTON") {
        d.target.parentElement.remove();
    }
}, false);
