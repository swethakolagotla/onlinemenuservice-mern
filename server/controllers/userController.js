import User from "../models/loginModel.js";
const getAllUsers = async (req, res) => {
  // Get all users from MongoDB
  const users = await User.find() ;

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

 res.cookie("token", "abcd");
let user=users[0]
  res.json({user,token:"abcd"});
};
export {getAllUsers}