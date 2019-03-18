import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { TodosProvider } from "./TodosContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const App = () => {
  return (
    <TodosProvider>
      <div id="todo-app">
        <h1 id="title">React hooks</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodosProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
