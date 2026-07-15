import { Router } from "express";
import { getProjectIdeas } from "../controllers/projectController";

const router = Router();

router.get("/ideas", getProjectIdeas);

export default router;
