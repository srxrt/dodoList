// gets the task list from the local storage
let taskArray = JSON.parse(localStorage.getItem("taskList")) || [];

// focuses keyboard on the input section
const taskInput = document.querySelector(".task-input");
taskInput.focus();

// render list when Enter pressed
taskInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addTaskToList();
	}
});

// renders task list to the screen
renderTaskList(taskArray);

// add button at the bottom
const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener("click", () => {
	addTaskToList();
});

// renderer for the tasklist onto the screen
function renderTaskList() {
	const taskListDiv = document.querySelector(".main-div");
	let html = "";

	for (let i = 0; i < taskArray.length; i++) {
		if (!taskArray[i].done) {
			html += `<div class="task-div div-${i}" id="${i}">
						<label class="container">
							  <span class="label-${i}">
							     ${taskArray[i].title}
							  </span>
						   <input type="checkbox" class="input-${i}">
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
						      <span class="label-${i}">
							     ${taskArray[i].title}
							  </span>
						   <input type="checkbox" checked="checked" class="input-${i}">
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
		}
	}

	taskInput.focus();
	taskListDiv.innerHTML = html;
	addELtoDiv();
}

// adds tasks to the tasklist
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
	saveToLocalStorage();
}

// grays out the ticked task or reverts when unticked
function grayOut(i) {
	const taskDiv = document.querySelector(`.div-${i}`);

	if (!taskArray[i].done) {
		taskDiv.classList.add("done");
		taskArray[i].done = true;
	} else {
		taskDiv.classList.remove("done");
		taskArray[i].done = false;
	}
	saveToLocalStorage();
	taskInput.focus();
}

// adds event listener to every task and delete buttons
function addELtoDiv() {
	for (let i = 0; i < taskArray.length; i++) {
		document.querySelector(`.input-${i}`).addEventListener("click", () => {
			grayOut(i);
		});

		document.querySelector(`.remove-${i}`).addEventListener("click", () => {
			removeItem(i);
		});
		document.querySelector(`.edit-${i}`).addEventListener("click", () => {
			editTask(i);
		});
	}
}

// removes items when delete button is pressed
function removeItem(i) {
	taskArray.splice(i, 1);
	renderTaskList(taskArray);
	saveToLocalStorage();
}

// saves the task list to local storage
function saveToLocalStorage() {
	localStorage.setItem("taskList", JSON.stringify(taskArray));
}

// edits the task and saves
function editTask(i) {
	const editLabel = document.querySelector(`.label-${i}`);

	console.log(inputElement);
}
