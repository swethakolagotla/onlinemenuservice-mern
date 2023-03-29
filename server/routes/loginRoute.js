import {
  getAllUsers,
} from "../controllers/userController.js";
import express from "express";
//import { AuthAdmin } from "../middleWare/Auth.js";
const userrouter = express.Router();

userrouter.route("/auth/login").get( getAllUsers) 
 
export default userrouter;
