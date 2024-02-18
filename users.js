async function methodGetTodos() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    xhr.send();

    xhr.onload = async function () {
        if (xhr.status == 200) {
            let todos = JSON.parse(xhr.responseText);
            await getUsersAndRenderTable(todos);
        }
    };
}

async function getUsersAndRenderTable(todos) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status == 200) {
            let users = JSON.parse(xhr.responseText);
            renderTable(todos, users);
        }
    };
}

function renderTable(todos, users) {
    $('table tbody').empty();

    todos.forEach((todo, index) => {
        let user = users.find(user => user.id === todo.userId);

        let row = '<tr>';
        row += '<td>' + (index + 1) + '</td>';
        row += '<td>' + (user ? user.name : '') + '</td>';
        row += '<td>' + todo.title + '</td>';
        row += '<td><input type="checkbox" ' + (todo.completed ? 'checked' : '') + ' disabled></td>';
        row += '</tr>';

        $('table tbody').append(row);
    });
}
