import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user_route.js";
import authRouter from "./routes/auth_route.js";
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(() => {
  console.log("mongodb connected successfully");
});
app.get("/", (req, res) => {
  res.send("route successfull.");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Error handling code
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
  return next();
});

app.listen(8000, () => console.log("Server running on port 8000"));
