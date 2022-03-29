import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learning Redux", content: "redux" },
  { id: 2, title: "Learning Redux2", content: "redux2" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
