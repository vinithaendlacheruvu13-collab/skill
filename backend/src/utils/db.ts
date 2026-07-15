import mongoose from "mongoose";

const connectDB = async (uri?: string) => {
  const mongoUri = uri || process.env.MONGODB_URI;
  if (!mongoUri) throw new Error("MONGODB_URI is not set in environment");

  try {
    await mongoose.connect(mongoUri, {
      // useNewUrlParser, useUnifiedTopology are defaults in Mongoose 7
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
