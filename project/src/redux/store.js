import { configureStore } from '@reduxjs/toolkit'
import TasksSlice from './TasksSlice';

export const store = configureStore({
  reducer: {
		Task: TasksSlice
  },
});