import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidator";
import {createNewClass, listClasses, deleteClass} from "../controllers/classes.controllers";
import { classSchema } from "../models/lessons.model";

const router = Router();

router.post("/turmas", validateSchema(classSchema), createNewClass)
router.get("/turmas", listClasses)
router.delete("/turmas/:id", deleteClass)

export default router