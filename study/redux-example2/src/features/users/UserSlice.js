import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "David" },
  { id: "1", name: "Lovid" },
  { id: "2", name: "Navid" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    AddUsers: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
  },
});

export const { AddUsers } = userSlice.actions;

export default userSlice.reducer;
