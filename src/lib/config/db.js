import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://andylamytcoding:${process.env.MONGODB_API_KEY}@cluster0.sbpddni.mongodb.net/blog-app`
    );
    console.log("Connected to Database");
  } catch (err) {
    console.log("Failed to connect to database:", err.message);
  }
}
