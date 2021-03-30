const form = document.getElementById('form'),
  input = document.getElementById('input'),
  todosUL = document.getElementById('todos');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo() {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () =>
      todoEl.classList.toggle('completed')
    );

    todoEl.addEventListener('click', (e) => {
      e.preventDefault();

      todoEl.remove();
    });

    todosUL.appendChild(todoEl);

    input.value = '';
  }
}
