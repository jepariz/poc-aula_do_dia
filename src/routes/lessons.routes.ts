import { Router } from "express";
import { createNewLesson, listLessons, listLessonsById, updateLesson, deleteLesson } from "../controllers/lessons.controllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { contentSchema, lessonSchema} from "../models/lessons.model.js";

const router = Router();

router.post("/aulas", validateSchema(lessonSchema), createNewLesson)
router.get("/aulas", listLessons);
router.get("/aulas/:id", listLessonsById);
router.patch("/aulas/:id", validateSchema(contentSchema), updateLesson)
router.delete("/aulas/:id", deleteLesson)


export default router