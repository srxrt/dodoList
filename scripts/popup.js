let taskArray = [];

const taskInput = document.querySelector(".task-input");
taskInput.focus();

//render list when Enter pressed
taskInput.addEventListener("keydown", (event) => {
	console.log(event.key);
	if (event.key === "Enter") {
		addTaskToList();
	}
});

renderTaskList(taskArray);

const taskListElement = document.querySelector(".task-list");

const checkBox = taskListElement.children[0];
const labelElement = taskListElement.children[1];

const addTaskButton = document.querySelector(".add-task-button");

addTaskButton.addEventListener("click", () => {
	addTaskToList();
});

//input box

//renders the tasklist onto the screen
function renderTaskList() {
	const taskListForm = document.querySelector(".task-list");
	let html = "";

	for (let i = 0; i < taskArray.length; i++) {
		html += `<div class="task-div">
            <input class="checkbox" type="checkbox" name="a-task" id=${i} />
			<label for=${i} class="task-name">${taskArray[i].title}</label>
                  </div>`;
	}

	taskInput.focus();
	taskListForm.innerHTML = html;
}

function addTaskToList() {
	const title = taskInput.value;

	if (title) {
		taskArray.push({
			title,
			done: false,
		});
	}

	taskInput.value = "";
	renderTaskList(taskArray);
}
