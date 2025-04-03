import express from "express";
const router = express.Router();
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getProfile, login } from "../controllers/user.controller.js";

router.post("/login", login);
router.get("/getProfile", isAuthenticated, getProfile);

export default router;
