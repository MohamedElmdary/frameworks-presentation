import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const url = "http://localhost:8080/todo";

class Home extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get(url)
      .then(({ data }) => {
        console.log(data.todos);
        this.setState({
          todos: data.todos
        });
      })
      .catch(e => console.log(e));
  }

  editTodo = id => {
    console.log(
      "going to edit",
      this.state.todos.filter(todo => todo._id === id)
    );
    this.props.history.push({
      pathname: `/edit-todo/${id}`,
      state: {
        todo: this.state.todos.filter(todo => todo._id === id)[0]
      }
    });
  };

  removeTodo = id => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const todos = this.state.todos.filter(todo => todo._id !== id);
        this.setState({
          todos
        });
      })
      .catch(() => {});
  };

  render() {
    return (
      <main className="todos">
        <ol type="1" id="todos">
          {this.state.todos && this.state.todos.length > 0
            ? this.state.todos.map(todo => (
                <li key={todo._id}>
                  <h4 className="title">Title: {todo.title}</h4>
                  <p>Content: {todo.content}</p>
                  <div className="todos-actions">
                    <span onClick={this.removeTodo.bind(this, todo._id)}>
                      remove
                    </span>
                    <span onClick={this.editTodo.bind(this, todo._id)}>
                      edit
                    </span>
                  </div>
                </li>
              ))
            : null}
        </ol>
      </main>
    );
  }
}

export default Home;
