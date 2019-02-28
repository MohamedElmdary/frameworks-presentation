import React, { Component } from "react";

class AddForm extends Component {
  state = {
    todo: {
      title: "",
      content: ""
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
      <section
        className="form"
        onSubmit={e => this.props.addNewTodo(e, this.state.todo)}
      >
        <form>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.todo.title}
            onChange={this.handleInputChange}
          />
          <textarea
            name="content"
            value={this.state.todo.content}
            onChange={this.handleInputChange}
            placeholder="content"
          />
          <button type="submit">add todo</button>
        </form>
      </section>
    );
  }
}

export default AddForm;
