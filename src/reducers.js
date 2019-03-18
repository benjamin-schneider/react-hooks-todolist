const persistTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case "done":
      return persistTodos({
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: action.done } : { ...todo }
        )
      });
    case "add":
      return persistTodos({
        todos: [
          ...state.todos,
          { title: action.title, id: state.todos.length + 1, done: false }
        ]
      });
    default:
      throw new Error();
  }
};

export { todosReducer };
