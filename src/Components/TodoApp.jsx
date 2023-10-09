import React from "react";
import useTODO from "../hooks/useTODO"; // Asegúrate de tener la ruta correcta
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import "./TodoApp.css";

const TodoApp = () => {
  const {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    countTodos,
    countPendingTodos,
  } = useTODO();

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        <p>Total de Tareas: {countTodos()}</p>
        <p>Tareas Pendientes: {countPendingTodos()}</p>
      </div>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
