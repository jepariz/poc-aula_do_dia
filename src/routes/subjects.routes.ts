import { Router } from "express";
import { createNewSubject, deleteSubject, listSubjects } from "../controllers/subjects-controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { subjectSchema } from "../models/lessons.model.js";

const router = Router();

router.post("/materias", validateSchema(subjectSchema), createNewSubject)
router.get("/materias", listSubjects)
router.delete("/materias/:id", deleteSubject)

export default router