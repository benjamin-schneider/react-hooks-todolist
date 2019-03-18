import React, { createContext, useReducer } from "react";
import { todosReducer } from "./reducers";

const TodosContext = createContext({});

const TodosProvider = ({ children }) => {
  const todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos")).todos
    : [
        { id: 1, title: "aaaaa", done: false },
        { id: 2, title: "bbbbb", done: false }
      ];
  const [state, dispatch] = useReducer(todosReducer, { todos });
  const context = { state, dispatch };
  return (
    <TodosContext.Provider value={context}>{children}</TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
