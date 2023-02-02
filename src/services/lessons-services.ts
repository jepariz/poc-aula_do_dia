import { Lesson } from "../types/lessons.type";
import {findClass, findSubject, findDuplicateLesson, insertLesson, getLessonById, updateLesson, deleteLesson, findLessons} from "../repositories/lessons-repositories";
import httpStatus from "http-status";


async function createLesson(lesson:Lesson) {
    const turma = await findClass(lesson.turma_id)
   
    if(!turma){
        throw httpStatus[404]
    }

    const materia = await findSubject(lesson.materia_id)
  
    if(!materia){
        throw httpStatus[404]
    }

    const novaAula = await findDuplicateLesson(lesson.data, lesson.materia_id, lesson.turma_id)

    if (novaAula.length > 0) {
       throw httpStatus[409]
      } 

    const newLesson = await insertLesson(lesson)

    return newLesson
}

async function findAllLesson() {
    
    const lessonExists = await findLessons()

    if(!lessonExists){
        throw httpStatus[404]
    }

    return lessonExists
}

async function findLessonById(lessonId:number) {
    
    const lessonExists = await getLessonById(lessonId)

    if(!lessonExists){
        throw httpStatus[404]
    }

    return lessonExists
}

async function updateLessonById(id:number, conteudo: string) {

    if(!conteudo){
        throw httpStatus[422]
    }

    await findLessonById(id)

    const update = await updateLesson(id, conteudo)
    return update
}

async function deleteLessonById(lessonId:number) {

    await findLessonById(lessonId)

    const deleted = await deleteLesson(lessonId)
    return deleted
}


export {
    createLesson,
    findLessonById,
    updateLessonById,
    deleteLessonById,
    findAllLesson
}