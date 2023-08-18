// src/features/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Item: localStorage.getItem('tasks') != null ? JSON.parse(localStorage.getItem('tasks')) : [],
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.Item.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.Item));
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
