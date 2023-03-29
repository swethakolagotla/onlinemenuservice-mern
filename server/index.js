import mongoose from "mongoose";
import express from "express";
import router from "./routes/menuRoute.js";
import cors from "cors"
import userrouter from "./routes/loginRoute.js";
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://swethak:Swetha240@cluster0.1xjubpd.mongodb.net/Food-app?retryWrites=true&w=majority"
  )
  .then((con) => console.log("data connection established"))
  .catch((err) => console.log("failed"));
 
const app = express();
app.use(express.json());
app.use(cors())
app.use(router);
app.use(userrouter)
app.listen(4000, () => console.log("listening to port 4k..."));
