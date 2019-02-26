const url = "http://localhost:8080/todo";
const id = window.location.search.split("=")[1];
const form = document.forms[0];

axios
  .get(`${url}/${id}`)
  .then(({ data }) => {
    const todo = data.todo;
    form.querySelector("input").value = todo.title;
    form.querySelector("textarea").value = todo.content;
  })
  .catch(() => (window.location.href = "/"));

form.onsubmit = function(e) {
  e.preventDefault();
  const [title, content] = e.target;

  axios
    .put(`${url}/${id}`, {
      title: title.value,
      content: content.value
    })
    .then(function() {
      window.location.href = "/";
    })
    .catch(() => (window.location.href = "/"));
};
