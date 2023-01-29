import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidator.js";
import {createNewClass, listClasses} from "../controllers/classes.controllers.js";
import { subjectSchema } from "../models/lessons.model.js";

const router = Router();

//router.post("/materias", validateSchema(classSchema), createNewClass)
//router.get("/materias", listClasses)
//router.delete("/materias", deleteClasses)

export default router