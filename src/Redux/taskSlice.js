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
    updateTask: (state, action) => {
      const { taskID, updateTaskContent } = action.payload;
      const task = window.localStorage.getItem('tasks');

      console.log('Update', updateTaskContent);

      if (task) {
        const allTask = JSON.parse(task);
        allTask.forEach((item) => {
          if (item.id === taskID) {
            item.title = updateTaskContent.title;
            item.desc = updateTaskContent.desc;
            item.status = updateTaskContent.status;
            item.timestamp = updateTaskContent.timestamp;
          }
        });
        localStorage.setItem('tasks', JSON.stringify(allTask));
        state.Item = allTask;
      }
    },

    deleteTask: (state, action) => {
      const filterItem = state.Item.filter((element) => element.id !== action.payload);
      state.Item = filterItem;

      localStorage.setItem('tasks', JSON.stringify(filterItem));
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
