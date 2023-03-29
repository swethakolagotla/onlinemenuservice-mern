import { menuActions } from "./MenuSlice";
import config from "../config";
import axios from "axios";

export const getAllmenus = () => {
  return async (dispatch) => {
    axios
      .get(config.URL)
      .then((res) => {
        dispatch(menuActions.getMenus(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
 