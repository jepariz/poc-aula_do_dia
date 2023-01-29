import { Lesson } from "../types/lessons.type.js";
import {findClass, findSubject, findDuplicateLesson, insertLesson} from "../repositories/lessons-repositories.js";


async function createLesson(lesson:Lesson) {
    const turma = await findClass(lesson.turma_id)

    if(!turma){
        throw new Error("Turma não encontrada");
    }

    const materia = await findSubject(lesson.materia_id)

    if(!materia){
        throw new Error("Matéria não encontrada");
    }

    const novaAula = await findDuplicateLesson(lesson.data, lesson.materia_id, lesson.turma_id)

    if (novaAula.length > 0) {
       throw new Error("Essa aula já existe");
      } 

    await insertLesson(lesson)
}

export {
    createLesson
}