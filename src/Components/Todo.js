import React from "react";
import { useState } from "react/cjs/react.development";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../app/TodoSlice";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const dispatch = useDispatch();

  const handleToggleClick = (task) => {
    debugger;
    dispatch(toggleComplete({ id: task.id, isComplete: !task.isComplete }));

    let updatedTodos = todos.map((todo) => {
      if (todo.id === todos.id) {
        todos.isComplete = !todos.isComplete;
      }
      return todo;
    });
    //setTodos(updatedTodos);
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => handleToggleClick(todo)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
