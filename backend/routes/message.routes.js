import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/send", protectRoute, sendMessage);
router.get("/:classroomId", protectRoute, getMessages);

export default router;
