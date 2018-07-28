const ul = document.getElementById('list');
const form = document.getElementById('form');
const inputField = document.getElementById('todo-field');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const res = await fetch('http://localhost:3000/todo', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ todo: inputField.value })
  })

    const json = await res.json();
    const li = document.createElement('li');
    li.innerHTML = json.todo;
    ul.appendChild(li);
  });
