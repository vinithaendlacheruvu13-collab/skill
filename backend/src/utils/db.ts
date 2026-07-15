import mongoose from "mongoose";

const connectDB = async (uri?: string) => {
  const mongoUri = uri || process.env.MONGODB_URI;
  if (!mongoUri || mongoUri.includes("<db_password>")) {
    console.warn("MongoDB URI is not configured or contains a placeholder. Skipping DB connection for local development.");
    return;
  }

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
