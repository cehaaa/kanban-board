import { createSlice } from "@reduxjs/toolkit";

export const sidePeekSlice = createSlice({
	name: "sidePeek",
	initialState: {
		isShow: false,
	},
	reducers: {
		open: state => {
			return {
				...state,
				isShow: true,
			};
		},

		close: state => {
			return {
				...state,
				isShow: false,
			};
		},
	},
});

export const isShowSidePeek = state => state.sidePeek.isShow;

export const { open, close } = sidePeekSlice.actions;

export const sideTaskReducer = sidePeekSlice.reducer;
export default sideTaskReducer;
