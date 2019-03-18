import React, { useContext, useState } from "react";

import { TodosContext } from "./TodosContext";

const TodoForm = () => {
  const {
    dispatch,
    state: { todos }
  } = useContext(TodosContext);

  const [title, setTitle] = useState("");

  const addTitle = title => {
    if (title.length) {
      dispatch({ type: "add", title });
      setTitle("");
    }
  };

  return (
    <div className="todo-form">
      <input
        onChange={({ target }) => setTitle(target.value)}
        placeholder="I have too..."
        value={title}
        onKeyPress={({ key }) => {
          if (key === "Enter") {
            addTitle(title);
          }
        }}
      />
    </div>
  );
};

export default TodoForm;
