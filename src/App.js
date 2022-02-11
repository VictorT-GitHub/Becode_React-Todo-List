import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // -- useRef --
  const todoInputRef = useRef();

  // -- useState --
  const [todos, setTodos] = useState([]);

  // -- useEffect (local storage) --
  // localStorage getItem
  useEffect(() => {
    if (localStorage.getItem("TODOS_KEY")) {
      const storedTodos = JSON.parse(localStorage.getItem("TODOS_KEY"));
      setTodos(storedTodos);
    }
  }, []);

  // localStorage setItem
  useEffect(() => {
    localStorage.TODOS_KEY = JSON.stringify(todos);
  }, [todos]);

  // -- FUNCTIONS --
  // BTN ONCLICK EVENT (Form.js)
  function addNewTodo() {
    if (todoInputRef.current.value !== "") {
      const name = todoInputRef.current.value;

      setTodos((todos) => [
        ...todos,
        { id: uuidv4(), name: name, completed: false },
      ]);

      todoInputRef.current.value = null;
    }
  }

  // BTN ONCLICK EVENT (Form.js)
  function clearCompleted() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  // CHECKBOXS ONCHANGE EVENT (Todo.js)
  function toggleCompleted(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  // BTN ONCLICK EVENT (Todo.js)
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  // -- JSX --
  return (
    <main>
      <h1>My todo App</h1>

      <Form
        todoInputRef={todoInputRef}
        addNewTodo={addNewTodo}
        clearCompleted={clearCompleted}
      />

      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
