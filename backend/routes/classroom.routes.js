import express from "express";
import { createClassroom, getClassroom } from "../controllers/classroom.controller.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createClassroom);
router.get("/:id", protectRoute, getClassroom);

export default router;
