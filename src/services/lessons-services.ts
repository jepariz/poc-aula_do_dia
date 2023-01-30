import { Lesson } from "../types/lessons.type.js";
import {findClass, findSubject, findDuplicateLesson, insertLesson, getLessonById, updateLesson} from "../repositories/lessons-repositories.js";
import { prisma } from "@prisma/client";


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

async function findLessonById(lessonId:number) {
    
    const lessonExists = await getLessonById(lessonId)

    if(!lessonExists){
        throw new Error("Essa aula não existe");
    }

    return lessonExists
}

async function updateLessonById(id:number, conteudo: string) {

    const lessonExists = await getLessonById(id)

    if(!lessonExists){
        throw new Error("Essa aula não existe");
    }

    return await updateLesson(id, conteudo)
}


export {
    createLesson,
    findLessonById,
    updateLessonById
}