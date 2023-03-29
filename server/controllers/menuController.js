import Menu from "../models/menuModel.js"; 
import { cleanUp } from "../utils/common.js";
import AdvancedFiltering from "../utils/advancedFilteringFunction.js";

const getData = async (req, res) => {
    try {
   const query = cleanUp(req.query);

   console.log(query);

   const data = await Menu.find(query);

      res.json({
        status: "success",
        result: data.length,
        data,
      });
    } catch (e) {
      res.status(500).json({
        status: "error",
        message: e.messgae,
      });
    }
 
};

const getDatabyId = async (req, res) => {
  try {
    const data = await Menu.findById(req.params.id);

    res.json({
      status: "success",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
};
const postData = (req, res) => {
  const { name, price, rate, dsc,img} = req.body;
  const menuItem = new Menu({
    name,
    price,
    rate,
    dsc,
    img
  });
  menuItem
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).json({
        status: "success",
        message: "successfully added",
      });
    })
    .catch((err) => {
      console.log(err, "Error");
    });
};
const updateById = async (req, res) => {
  try {
    await Menu.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({
      status: "success",
      mnessage: "successfully updated",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
};
const deleteById = async (req, res) => {
  try {
    await Menu.deleteOne({ _id: req.params.id });
    res.json({
      status: "success",
      messgae: "successfully deleted",
    });
  } catch (e) {
    res.status(501).json({
      status: "error",
      messgae: e.message,
    });
  }
};

export { getData, getDatabyId ,postData,updateById,deleteById};
