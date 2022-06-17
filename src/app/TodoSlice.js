import { createAction, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: Math.floor(Math.random() * 10000),
      title: "First Task",
      isComplete: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      debugger;
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: action.payload.title,
        isComplete: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].isComplete = action.payload.isComplete;
    },
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
