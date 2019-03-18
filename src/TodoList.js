import React, { useContext } from "react";

import { TodosContext } from "./TodosContext";

const TodoList = () => {
  const {
    dispatch,
    state: { todos }
  } = useContext(TodosContext);

  return todos.length ? (
    <ul className="todo-list">
      {todos.map(({ id, done, title }) => (
        <li
          key={id}
          className="todo-list__item"
          style={{ opacity: done ? 0.5 : 1 }}
        >
          <div className="todo-list__done">
            <input
              type="checkbox"
              defaultChecked={done}
              onChange={({ target }) =>
                dispatch({ type: "done", id, done: target.checked })
              }
            />
          </div>
          <div className="todo-list__id">#{id}</div>
          <div className="todo-list__title">{title}</div>
        </li>
      ))}
    </ul>
  ) : null;
};

export default TodoList;
