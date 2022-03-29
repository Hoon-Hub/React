import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    userName: "",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    userName: "",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPosts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userName) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userName,
          },
        };
      },
    },
  },
});

export const { AddPosts } = postSlice.actions;

export default postSlice.reducer;
