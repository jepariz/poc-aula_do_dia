import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidator.js";
import {createNewClass, listClasses, deleteClass} from "../controllers/classes.controllers.js";
import { classSchema } from "../models/lessons.model.js";

const router = Router();

router.post("/turmas", validateSchema(classSchema), createNewClass)
router.get("/turmas", listClasses)
router.delete("/turmas/:id", deleteClass)

export default router