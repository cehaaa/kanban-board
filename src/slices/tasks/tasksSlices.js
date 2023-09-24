import { createSlice } from "@reduxjs/toolkit";

import data from "../../utils/data";

const initialState = {
	data,
	selectedTask: {
		id: 1,
		tags: [],
		title: "",
		description: "",
		members: [],
	},
};

export const tasksSlices = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setSelectedTask: (state, action) => {
			return {
				...state,
				selectedTask: action.payload,
			};
		},

		createTask: (state, action) => {
			const { title, description, members, selectedStatus, backlog } =
				action.payload;

			state.data.tasks[selectedStatus].push({
				id: state.data.tasks[selectedStatus].length + 2,
				tags: backlog.length <= 0 ? [] : backlog,
				title: title === "" ? "Untitled" : title,
				description:
					description === ""
						? "This person is to lazy to write a description"
						: description,
				members: members.length <= 0 ? [] : members,
			});
		},
	},
});

export const { setSelectedTask, createTask } = tasksSlices.actions;

export const selectTasks = state => state.tasks.data;
export const selectSelectedTask = state => state.tasks.selectedTask;

export const tasksReducer = tasksSlices.reducer;
export default tasksReducer;
