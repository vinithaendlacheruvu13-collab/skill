import { Router } from "express";
import {
	createProfile,
	listProfiles,
	getProfileById,
	updateProfile,
	deleteProfile,
	getProfileInsights,
} from "../controllers/profileController";

const router = Router();

// insights should be defined before id-route to avoid conflicts
router.get("/insights", getProfileInsights);

router.post("/", createProfile);
router.get("/", listProfiles);
router.get("/:id", getProfileById);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;
