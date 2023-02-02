import { Router } from "express";
import { createNewLesson, listLessons, listLessonsById, updateLesson, deleteLesson } from "../controllers/lessons.controllers";
import { validateSchema } from "../middlewares/schemaValidator";
import { contentSchema, lessonSchema} from "../models/lessons.model";

const router = Router();

router.post("/aulas", validateSchema(lessonSchema), createNewLesson)
router.get("/aulas", listLessons);
router.get("/aulas/:id", listLessonsById);
router.put("/aulas/:id", validateSchema(contentSchema), updateLesson)
router.delete("/aulas/:id", deleteLesson)


export default router