import express from "express";
import {
  getJobRecommendations,
  getCandidateRecommendations,
} from "../controllers/recommendation.controller.js";
import { authenticateUser } from "../middleware/auth.js";

const router = express.Router();

router.post("/job-recommendations", authenticateUser, getJobRecommendations);
router.post(
  "/candidate-recommendations",
  authenticateUser,
  getCandidateRecommendations
);

export default router;
