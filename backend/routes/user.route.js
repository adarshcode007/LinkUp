import express from "express";
import {
  discoverUsers,
  followUser,
  getUserData,
  unfollowUser,
  updateUserData,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../configs/multer.js";

const router = express.Router();

router.get("/data", protect, getUserData);

router.post(
  "/update",
  upload.fields([
    { name: "profile", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  protect,
  updateUserData
);

router.post("/discover", protect, discoverUsers);
router.post("/follow", protect, followUser);
router.post("/unfollow", protect, unfollowUser);

export default router;
