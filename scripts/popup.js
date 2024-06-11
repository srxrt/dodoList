class Tasks {
	tasks = {
		taskName: "My task",
		taskId: "1",
		done: false,
	};
}

let taskArray = [];

const taskListElement = document.querySelector(".task-list");

console.log(taskListElement);

const checkBox = taskListElement.children[0];
const labelElement = taskListElement.children[1];

const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", () => {
	labelElement.textContent = "heelow world";
});
