import { Router } from "express";
import { createNewSubject, deleteSubject, listSubjects } from "../controllers/subjects-controllers";
import { validateSchema } from "../middlewares/schemaValidator";
import { subjectSchema } from "../models/lessons.model";

const router = Router();

router.post("/materias", validateSchema(subjectSchema), createNewSubject)
router.get("/materias", listSubjects)
router.delete("/materias/:id", deleteSubject)

export default router