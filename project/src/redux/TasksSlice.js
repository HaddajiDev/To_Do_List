import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasklist: [
	{
		id: Math.random(),
		task: "task 1",
		prio: "high"
	},
	{
		id: Math.random(),
		task: "task 2",
		prio: "mid"
	},
	{
		id: Math.random(),
		task: "task 3",
		prio: "low"
	}
  ]
}

export const TasksSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {    
    Add_Task: (state, action) => {
      state.tasklist.push(action.payload);
    },
	Remove_Task :(state, action) => {
		state.tasklist = state.tasklist.filter((el) => el.id !== action.payload);
	},
	Edit_Task: (state, action) => {
		let index = state.tasklist.findIndex((el) => el.id === action.payload.id);
		state.tasklist[index] = action.payload;
	}
  },
})


export const {Add_Task, Remove_Task, Edit_Task} = TasksSlice.actions

export default TasksSlice.reducer