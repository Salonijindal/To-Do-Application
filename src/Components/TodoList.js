import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../app/TodoSlice";
function TodoList() {
  const [todos, setTodos] = useState(useSelector((state) => state.todos));
  const addTodo = (todo) => {
    const newToDos = [todo, ...todos];
    console.log(newToDos);
    setTodos(newToDos);
  };
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleComplete({ id: todos.id, isComplete: !todos.isComplete }));

    let updatedTodos = todos.map((todo) => {
      if (todo.id === todos.id) {
        todos.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {};
  return (
    <div>
      <h1> What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />

      <div
        key={todos.id}
        onClick={() => completeTodo(todos.id)}
        onChange={() => handleToggleClick()}
      >
        {todos.text}
      </div>
    </div>
  );
}

export default TodoList;
