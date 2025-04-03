import bcrypt from "bcryptjs";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

//TODO:- User Login
export const login = async (req, res) => {
  try {
    // if(!req.body){
    //     console.log("error");
    // }
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res.status(400).json({
        message: "Fill All Details",
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const secret = process.env.secretKey;
    console.log(secret, "value");

    // Generate token
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1y" });

    return res.status(200).json({ token, email: user.email, success: true });
  } catch (error) {
    console.error("Error logging in:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const getProfile = async (req, res) => {
  try {
    //Pending Logic
  } catch (error) {
    console.log(error);
  }
};
