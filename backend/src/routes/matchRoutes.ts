import { Router } from "express";
import { generateMatchRecommendations } from "../controllers/matchController";

const router = Router();

router.get("/recommendations", generateMatchRecommendations);

export default router;
