import express from "express";
import {
  acceptConnectionrequest,
  discoverUsers,
  followUser,
  getUserConnections,
  getUserData,
  getUserProfiles,
  sendConnectionRequest,
  unfollowUser,
  updateUserData,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.js";
import { upload } from "../configs/multer.js";
import { getuserRecentMessages } from "../controllers/message.controller.js";

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

router.post("/connect", protect, sendConnectionRequest);
router.post("/accept", protect, acceptConnectionrequest);
router.get("/connections", protect, getUserConnections);

router.post("/profiles", getUserProfiles);

router.get("/recent-messages", protect, getuserRecentMessages);

export default router;
