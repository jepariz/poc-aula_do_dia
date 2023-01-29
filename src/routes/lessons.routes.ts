import { Router } from "express";
import { createNewLesson, listLessons } from "../controllers/lessons.controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { lessonSchema, classSchema } from "../models/lessons.model.js";

const router = Router();

//router.post("/subjects", validateSchema(subjectSchema), createNewSubject)
router.post("/aulas", validateSchema(lessonSchema), createNewLesson)
router.get("/aulas", listLessons);
//router.get("/lessons:id", listUniqueLesson);
//router.patch("/lessons:id", validateSchema(nextLessonSchema), createNextLesson)
//router.delete("/lessons", deleteLesson)


export default router