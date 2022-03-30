import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "title1",
    content: "content1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPosts: {
      reducer(state, action) {
        state.push(action.payload);
        console.log(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const { AddPosts } = postSlice.actions;

export default postSlice.reducer;
