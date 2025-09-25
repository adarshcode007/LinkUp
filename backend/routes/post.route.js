import express from "express";
import { upload } from "../configs/multer.js";
import { protect } from "../middleware/auth.js";
import {
  addPost,
  getFeedPosts,
  likePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/add", upload.array("images", 4), protect, addPost);
router.get("/feed", protect, getFeedPosts);
router.post("/like", protect, likePost);

export default router;
