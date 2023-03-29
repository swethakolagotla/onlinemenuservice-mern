import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
   
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("user", UserSchema, "users");
export default User;
