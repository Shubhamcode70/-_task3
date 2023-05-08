const tasks = [];

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const input = document.querySelector('#taskInput');
	const task = input.value.trim();

	if (task !== '')
	 {
		tasks.push(task);
		input.value = '';
		Tasks();
	}
}
);

function Tasks()
 {
	const taskList = document.querySelector('#taskList');
	taskList.innerHTML = '';
	tasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.textContent = task;

		const compButton = document.createElement('button');
		compButton.textContent = 'Complete';

		compButton.addEventListener('click', () => {
			tasks.splice(index, 1);
			Tasks();
		}
		);

		li.appendChild(compButton);
		taskList.appendChild(li);
	}
	);
}

Tasks();
