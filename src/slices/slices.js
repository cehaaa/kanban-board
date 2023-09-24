import { combineReducers } from "@reduxjs/toolkit";

import tasksReducer from "./tasks/tasksSlices";
import sideTaskReducer from "./sideTask/sideTaskSlices";

export const rootReducer = combineReducers({
	tasks: tasksReducer,
	sideTask: sideTaskReducer,
});

export default rootReducer;
