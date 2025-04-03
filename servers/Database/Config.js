import mongoose from "mongoose";
const DbUrl = process.env.databaseUrl; //Database uri
const dbConnection = async () => {
  try {
    await mongoose.connect(DbUrl, {});
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

dbConnection();
