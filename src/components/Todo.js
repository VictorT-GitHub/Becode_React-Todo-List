import React from "react";

function Todo({ todo, toggleCompleted, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
        />
        {todo.name}
      </label>

      <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
    </li>
  );
}

export default Todo;
