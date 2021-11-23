import React from "react";

// ---------------------------------------- TODO() ----------------------------------------
export default function Todo({ todo, toggleCompleted, deleteTodo }) {
  // Remove parametre of toggleCompleted function (for the onChange event)
  function togglC_noP() {
    toggleCompleted(todo.id);
  }

  function deleteT_noP() {
    deleteTodo(todo.id);
  }

  // -------------------- JSX --------------------
  return (
    <li>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={togglC_noP} />
        {todo.name}
      </label>
      <button onClick={deleteT_noP}>Delete Todo</button>
    </li>
  );
}
