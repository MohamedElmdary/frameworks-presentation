const url = "http://localhost:8080/todo";
const form = document.forms[0];

form.onsubmit = function(e) {
  e.preventDefault();
  const [title, content] = e.target;

  axios
    .post(`${url}/add`, {
      title: title.value,
      content: content.value
    })
    .then(function() {
      window.location.href = "/";
    })
    .catch(() => (window.location.href = "/"));
};
