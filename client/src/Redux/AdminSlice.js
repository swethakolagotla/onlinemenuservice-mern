import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userAdmin: false,
};
export const userSlice = createSlice({
  name: "createMenu",
  initialState,
  reducers: {
    updateAdmin: (state, actions) => {
      state.userAdmin = actions.payload;
    },
  },
});
export const { updateAdmin } = userSlice.actions;
export default userSlice.reducer;
