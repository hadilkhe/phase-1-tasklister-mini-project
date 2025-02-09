document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const newTaskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const taskText = newTaskInput.value;
    if (taskText.trim() !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        taskItem.remove(); 
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      newTaskInput.value = ""; // Clear the input field
    }
  });
});

