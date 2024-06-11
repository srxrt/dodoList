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

const addTaskButton = document.querySelector(".add-task-button");

addTaskButton.addEventListener("click", () => {
	addTaskToList();
});

//input box

//renders the tasklist onto the screen
function renderTaskList() {
	const taskListDiv = document.querySelector(".main-div");
	let html = "";

	for (let i = 0; i < taskArray.length; i++) {
		html += `<div class="task-div">
            <label class="container">${taskArray[i].title}
                  <input type="checkbox">
                  <span class="checkmark"></span>
            </label>
                  </div>`;
	}

	taskInput.focus();
	taskListDiv.innerHTML = html;
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
