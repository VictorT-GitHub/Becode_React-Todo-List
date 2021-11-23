import React from "react";
import Todo from "./Todo";

// ---------------------------------------- TODOLIST() ----------------------------------------
export default function TodoList({ todos, toggleCompleted, deleteTodo }) {
  // -------------------- JSX --------------------
  return (
    <section>
      <h5>
        {todos.filter((todo) => !todo.completed).length} left to do |{" "}
        {todos.filter((todo) => todo.completed).length} completed
      </h5>
      <h4>Todos</h4>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}
