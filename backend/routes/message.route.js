import express from "express";
import {
  getChatMessages,
  sendMessage,
  sseController,
} from "../controllers/message.controller.js";
import { upload } from "../configs/multer.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userId", sseController);
router.post("/send", upload.single("image"), protect, sendMessage);
router.post("/get", protect, getChatMessages);

export default router;
