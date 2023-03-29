import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  menus: [],
};
export const menuSlice = createSlice({
  name: "createMenu",
  initialState,
  reducers: {
    getMenus: (state, actions) => {
      state.menus = actions.payload;
    },
  },
});
export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
