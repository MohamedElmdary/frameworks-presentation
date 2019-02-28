import React, { Component } from "react";
import "./style.css";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import AddForm from "./components/add.form";
import Home from "./components/home";
import EditTodo from "./components/edit";
import axios from "axios";
import { Redirect } from "react-router-dom";
const url = "http://localhost:8080/todo";

class App extends Component {
  state = {
    redirectTo: null
  };

  addNewTodo(e, todo) {
    e.preventDefault();
    axios
      .post(`${url}/add`, todo)
      .then(() => {
        this.setState({
          redirectTo: "/"
        });
      })
      .catch(() => {
        this.setState({
          redirectTo: "/"
        });
      });
  }

  render() {
    let red = null;
    if (this.state.redirectTo !== null) {
      red = <Redirect to={this.state.redirectTo} />;
    }
    return (
      <React.Fragment>
        <Navbar />
        {red}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-todo" component={AddForm} />
          <Route path="/edit-todo/:id" component={EditTodo} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
