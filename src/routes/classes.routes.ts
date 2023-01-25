import { Router } from "express";
import { listClasses } from "../controllers/classes.controllers.js";

const router = Router();

router.get("/classes", listClasses)

export default router