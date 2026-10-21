import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    customIncrement: (state, action) => {
      console.log("actions :", action);
      state.count = action.payload.harsh;
    },
  },
  extraReducers(builder) {},
});

export const { increment, customIncrement } = counterSlice.actions;
export default counterSlice.reducer;
