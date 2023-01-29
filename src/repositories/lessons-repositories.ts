import prisma from "../database/database.js";
import { Lesson } from "../types/lessons.type.js";

async function findLessons() {
    return prisma.aulas.findMany({
        include: {
            turmas: {
              select: {
                nome: true,
              },
            },
            materias: {
              select: {
                nome: true,
              },
            },
          },});
}

async function findClass(classId:number) {
    return prisma.turmas.findFirst({
      where:{
        id: classId
      }
    })
}

async function findSubject(subjectId:number) {
  return prisma.turmas.findFirst({
    where:{
      id: subjectId
    }
  })
}

async function findDuplicateLesson(date:Date, subjectId: number, classId:number) {
  return prisma.aulas.findMany({
    where: {
      AND: [
        { data: { equals: date } },
        { turma_id: { equals: classId} },
        { materia_id: { equals: subjectId } },
      ],
    },
  });
}

async function insertLesson(lesson: Lesson) {

    return prisma.aulas.create({
        data: {
        data: lesson.data,
        conteudo_previsto: lesson.conteudo_previsto,
        turma_id: lesson.turma_id,
        materia_id: lesson.materia_id
        }
    })
}

export {
    findLessons,
    findClass,
    findSubject,
    findDuplicateLesson,
    insertLesson
}


