import { useState, useEffect } from "react";

const useTODO = () => {
  const saveToLocalStorage = (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };

  const loadFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error al cargar desde localStorage:", error);
      return null;
    }
  };

  const [todos, setTodos] = useState(loadFromLocalStorage("todos") || []);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    saveToLocalStorage("todos", todos);
  }, [todos]);

  const countTodos = () => todos.length;

  const countPendingTodos = () =>
    todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodo,
    toggleComplete,
    deleteTodo,
    countTodos,
    countPendingTodos,
  };
};

export default useTODO;
