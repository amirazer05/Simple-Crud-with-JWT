import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  deleteUser,
  updateUser,
  getUserById,
} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", getUserById);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.delete("/delete/:id", deleteUser);
router.patch("/update/:id", updateUser);

export default router;
