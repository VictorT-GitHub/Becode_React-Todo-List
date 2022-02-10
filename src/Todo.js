import React from "react";

// ---------------------------------------- TODO() ----------------------------------------
export default function Todo({ todo, toggleCompleted, deleteTodo }) {
  // -------------------- JSX --------------------
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
