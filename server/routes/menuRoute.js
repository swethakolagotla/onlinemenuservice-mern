import {
  getData,
  getDatabyId,
  postData,
  updateById,
  deleteById
} from "../controllers/menuController.js";
import express from "express";
const router = express.Router();
router.route("/menus").get(getData).post(postData)
router.route("/menus/:id").get(getDatabyId).patch(updateById).delete(deleteById);
export default router;