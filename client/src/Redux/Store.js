import { configureStore } from "@reduxjs/toolkit";
import menuSlicer from "./MenuSlice";
 import userSlicer from "./AdminSlice"
export const menuStore = configureStore({
  reducer: {
    menuSlicer,
    userSlicer
 
  },
});
