import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

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

// middleware
app.use('/api/auth', authRoute)
app.use('/api/users', authRoute)
app.use('/api/hotels', authRoute)
app.use('/api/rooms', authRoute)



app.listen(5001, () => {
  connect();
  console.log("connected to backend");
});
