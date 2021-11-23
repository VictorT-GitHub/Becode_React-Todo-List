import React from "react";

// ---------------------------------------- FORM() ----------------------------------------
export default function Form({ todoInputRef, addNewTodo, clearCompleted }) {
  // -------------------- JSX --------------------
  return (
    <section>
      <input ref={todoInputRef} type="text" placeholder="Type a new todo" />
      <button onClick={addNewTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear all Completed</button>
    </section>
  );
}
