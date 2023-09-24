import { configureStore } from "@reduxjs/toolkit";

import tasksSlices from "../slices/tasks/tasksSlices";
import sidePeekSlices from "../slices/sidePeek/sidePeek";

const store = configureStore({
	reducer: {
		tasks: tasksSlices,
		sidePeek: sidePeekSlices,
	},
});

export default store;
