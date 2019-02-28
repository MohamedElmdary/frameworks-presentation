import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const url = "http://localhost:8080/todo";

class EditTodo extends Component {
  state = {
    todo: {
      title: "",
      content: ""
    }
  };

  componentDidMount() {
    this.setState({
      todo: {
        title: this.props.history.location.state.todo.title || "",
        content: this.props.history.location.state.todo.content || ""
      }
    });
  }

  handleEditTodo = e => {
    e.preventDefault();
    const { todo } = this.state;
    if (todo.title.length > 0 && todo.content.length > 0) {
      axios
        .put(`${url}/${this.props.history.location.state.todo._id}`, todo)
        .then(() => this.props.history.push("/"))
        .catch(() => this.props.history.push("/"));
    }
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({
      todo: {
        ...prevState.todo,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <section className="form">
        <form onSubmit={this.handleEditTodo}>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.todo.title}
            onChange={this.handleInputChange}
          />
          <textarea
            name="content"
            placeholder="content"
            value={this.state.todo.content}
            onChange={this.handleInputChange}
          />
          <button type="submit">Edit todo</button>
        </form>
      </section>
    );
  }
}

export default EditTodo;
