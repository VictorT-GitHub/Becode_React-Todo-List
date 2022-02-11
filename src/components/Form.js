import React from "react";

function Form({ todoInputRef, addNewTodo, clearCompleted }) {
  return (
    <section>
      <input ref={todoInputRef} type="text" placeholder="Type a new todo" />
      <button onClick={addNewTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear all Completed</button>
    </section>
  );
}

export default Form;
