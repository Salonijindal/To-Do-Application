import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/TodoSlice";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isCompleted: false,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //setting Id and task into List from User into Object
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isCompleted: false,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            className="todo-input"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />

          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            placeholder="Type your task"
            className="todo-input"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
