import express from "express";
import {
  getJobRecommendations,
  getCandidateRecommendations,
} from "../controllers/recommendation.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/job-recommendations/:userId", getJobRecommendations);
router.post("/candidate-recommendations", getCandidateRecommendations);

export default router;
