import { Router } from "express";
import {createNewClass, listClasses} from "../controllers/classes.controllers.js";
import { createNewLesson, listLessons } from "../controllers/lessons.controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { lessonSchema, classSchema } from "../models/lessons.model.js";


const router = Router();

router.post("/classes", validateSchema(classSchema), createNewClass)
router.get("/classes", listClasses)
//router.post("/subjects", validateSchema(subjectSchema), createNewSubject)
router.post("/lessons", validateSchema(lessonSchema), createNewLesson)
router.get("/lessons", listLessons);
//router.get("/lessons:id", listUniqueLesson);
//router.patch("/lessons:id", validateSchema(nextLessonSchema), createNextLesson)
//router.delete("/lessons", deleteLesson)


export default router