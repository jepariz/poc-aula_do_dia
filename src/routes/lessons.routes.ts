import { Router } from "express";
import { createNewLesson, listLessons, listLessonsById } from "../controllers/lessons.controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { lessonSchema} from "../models/lessons.model.js";

const router = Router();

router.post("/aulas", validateSchema(lessonSchema), createNewLesson)
router.get("/aulas", listLessons);
router.get("/aulas/:id", listLessonsById);
//router.patch("/lessons:id", validateSchema(nextLessonSchema), createNextLesson)
//router.delete("/lessons", deleteLesson)


export default router