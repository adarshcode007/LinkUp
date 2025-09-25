import express from "express";
import { upload } from "../configs/multer.js";
import { protect } from "../middleware/auth.js";
import { addUserStory, getStories } from "../controllers/story.controller.js";

const router = express.Router();

router.post("/create", upload.single("media"), protect, addUserStory);
router.get("/get", protect, getStories);

export default router;
