import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('connect to mongoDB')
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
    console.log('mongoDB disconnected')
})
//


app.listen(5001, () => {
  connect();
  console.log("connected to backend");
});
