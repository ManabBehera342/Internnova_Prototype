import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "./../middlewares/isAuthenticated.js";
import { verifyEmail } from "../controllers/user.controller.js";
import { singleUpload } from "./../middlewares/multer.js";
const router = express.Router();

/* router.route("/register").post(singleUpload, register); */
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthenticated, singleUpload, updateProfile);
router.route("/verify/:token").get(verifyEmail);
export default router;
