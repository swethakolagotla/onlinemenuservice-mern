import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dsc: {
      type: String,
   
    },
    price: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: false,
    },
    country:{
        type:String,
     
    },
    img:{
      type:String,
    }
  
  },
   
);

const Menu = mongoose.model("menu", MenuSchema, "menus");
export default Menu;

