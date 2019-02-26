const url = "http://localhost:8080/todo";
var todos = document.getElementById("todos");

axios
  .get(url)
  .then(function(response) {
    const data = response.data.todos;
    console.log(data);
    if (data.length === 0)
      return (todos.innerHTML = "<li>No todos was found</li>");
    let res = "";
    for (let todo of data) {
      res += `
            <li>
                <h4 class="title">Title: ${todo.title}</h4>
                <p>Content: ${todo.content}</p>
                <div class="todos-actions">
                    <a href="#!" onclick="removeTodo('${todo._id}')">remove</a>
                    <a href="/edit-todo.html?id=${todo._id}">edit</a>
                </div>
            </li>`;
    }
    todos.innerHTML = res;
  })
  .catch(() => (window.location.href = "/"));

function removeTodo(id) {
  axios
    .delete(`${url}/${id}`)
    .then(function() {
      window.location.href = "/";
    })
    .catch(() => (window.location.href = "/"));
}
