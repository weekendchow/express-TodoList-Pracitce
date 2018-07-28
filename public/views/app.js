(() => {
  const ul = document.getElementById('list');
  const form = document.getElementById('form');
  const inputField = document.getElementById('todo-field');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ todo: inputField.value })
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        let li = document.createElement('li');
        li.innerHTML = json.title;
        ul.appendChild(li);

        let remove = document.createElement('input');
        remove.setAttribute('type', 'button');
        remove.setAttribute("value", "Remove");
        remove.setAttribute("id", json.id);
        li.appendChild(remove);

        remove.addEventListener('click', e => {
          e.preventDefault();
          fetch('http://localhost:3000/'+json.id, {
            method: 'DELETE'
          })
            .then(res => {
              li.parentNode.removeChild(li);
            })
            .catch( err => cosole.error(err))
        })

      });

    });
  })();
