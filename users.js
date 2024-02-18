async function methodGetTodos() {
    let xhrTodos = new XMLHttpRequest();
    xhrTodos.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    xhrTodos.send();

    xhrTodos.onload = function () {
      let todos = JSON.parse(xhrTodos.response);

      if (Array.isArray(todos) && todos.length > 0) {
       
        let xhrUsers = new XMLHttpRequest();
        xhrUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhrUsers.send();

        xhrUsers.onload = function () {
          let users = JSON.parse(xhrUsers.response);

          if (Array.isArray(users) && users.length > 0) {
            
            let userMap = {};
            users.forEach(user => {
              userMap[user.id] = user.name;
            });

            
            todos.forEach((todo, index) => {
              let row = '<tr>';
              row += '<td>' + (index + 1) + '</td>';
              row += '<td>' + userMap[todo.userId] + '</td>';
              row += '<td>' + todo.title + '</td>';
              row += '<td><input type="checkbox" ' + (todo.completed ? 'checked' : '') + ' disabled/></td>';
              row += '</tr>';

              $('table tbody').append(row);
            });
          }
        };
      }
    };
  }
function clearTodoList() {
    $('table tbody').empty(); 
}
