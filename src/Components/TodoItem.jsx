import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        background: todo.completed ? "green" : "gray",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;
