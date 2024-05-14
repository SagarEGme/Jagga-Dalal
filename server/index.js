import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_route.js"
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => { 
    console.log("mongodb connected successfully");
  })
app.get("/", (req, res) => {
  res.send("route successfull.");
});
app.use("/api/user",userRouter)
app.listen(8011, () => console.log("Server running on port 8000"));
