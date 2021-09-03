import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload.user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
