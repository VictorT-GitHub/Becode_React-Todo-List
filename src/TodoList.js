import React from "react";
import Todo from "./Todo";

// ---------------------------------------- TODOLIST() ----------------------------------------
// !!! EXEMPLE SANS DESTRUCTURING !!! EXEMPLE SANS DESTRUCTURING !!! EXEMPLE SANS DESTRUCTURING !!!
export default function TodoList(props) {
  // console.log(props);
  // -------------------- JSX --------------------
  return (
    <section>
      <h5>
        {props.todos.filter((todo) => !todo.completed).length} left to do |{" "}
        {props.todos.filter((todo) => todo.completed).length} completed
      </h5>
      <h4>Todos</h4>
      <ul>
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleCompleted={props.toggleCompleted}
            deleteTodo={props.deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}
