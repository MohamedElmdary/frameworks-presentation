import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => (
  <nav className="app-navbar">
    <ul>
      <li>
        <NavLink exact to="/">
          Todos
        </NavLink>
        {/* <a href="/">Todos</a> */}
      </li>
      <li>
        <NavLink exact to="/add-todo">
          Add Todo
        </NavLink>
        {/* <a href="/add-todo.html">Add Todo</a> */}
      </li>
    </ul>
  </nav>
);

export default navbar;
