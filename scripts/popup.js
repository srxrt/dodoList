let taskArray = [
	{
		title: "Task 1",
		done: false,
	},
	{
		title: "Task 2",
		done: false,
	},
];

const taskInput = document.querySelector(".task-input");
taskInput.focus();

//render list when Enter pressed
taskInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addTaskToList();
	}
});

renderTaskList(taskArray);

// add button at the bottom
const addTaskButton = document.querySelector(".add-task-button");

addTaskButton.addEventListener("click", () => {
	addTaskToList();
});

//renders the tasklist onto the screen
function renderTaskList() {
	const taskListDiv = document.querySelector(".main-div");
	let html = "";

	for (let i = 0; i < taskArray.length; i++) {
		if (!taskArray[i].done) {
			html += `<div class="task-div div-${i}" id="${i}">
						<label class="container">
							  ${taskArray[i].title}
						   <input type="checkbox" class="class-${i}">
						   <span class="checkmark"></span>
						</label>

						<span>								  					 
						  <button class="edit-button edit-${i}">
						     <img src="/images/editnote.svg" alt="remove"/>
						  </button>						  
										 
						  <button class="remove-button remove-${i}">
						     <img src="/images/delete.svg" alt="remove"/>
						  </button>						  
						<span>

					</div>`;
		} else {
			html += `<div class="task-div done div-${i}" id="${i}">
						<label class="container">
							  ${taskArray[i].title}
						   <input type="checkbox" checked="checked" class="class-${i}">
						   <span class="checkmark"></span>
						</label>
						<span>						 
						  <button class="remove-button remove-${i}">
						     <img src="/images/delete.svg" alt="remove"/>
						  </button>						  
						<span>
					  </div>`;
		}
	}

	taskInput.focus();
	taskListDiv.innerHTML = html;
	addELtoDiv();
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

// const index = 0;

function test() {
	const taskDiv = document.getElementById(`${0}`);
	taskDiv.classList.add("done");
}
let inc = 0;

function grayOut(i) {
	const taskDiv = document.querySelector(`.div-${i}`);

	if (!taskArray[i].done) {
		taskDiv.classList.add("done");
		taskArray[i].done = true;
	} else {
		taskDiv.classList.remove("done");
		taskArray[i].done = false;
	}

	taskInput.focus();
}

function addELtoDiv() {
	for (let i = 0; i < taskArray.length; i++) {
		document.querySelector(`.class-${i}`).addEventListener("click", () => {
			grayOut(i);
		});

		document.querySelector(`.remove-${i}`).addEventListener("click", () => {
			removeItem(i);
		});
	}
}

function removeItem(i) {
	taskArray.splice(i, 1);
	renderTaskList(taskArray);
}
