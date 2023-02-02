import prisma from "../database/database";
import { Lesson, LessonEntity} from "../types/lessons.type";

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
  return prisma.materias.findFirst({
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

async function insertLesson(lesson: Lesson) : Promise<LessonEntity> {
 
 const newLesson = await prisma.aulas.create({
        data: {
        data: lesson.data,
        conteudo_previsto: lesson.conteudo_previsto,
        turma_id: lesson.turma_id,
        materia_id: lesson.materia_id
        }
    })

  return newLesson
}

async function getLessonById(lessonId:number) {

  return prisma.aulas.findFirst({
    where: {id: lessonId}
  })
}

async function updateLesson(id: number, conteudo: string) {
  
  return prisma.aulas.update({
    where: {id},
    data: {
      conteudo_previsto: conteudo
    }
  })
}

async function deleteLesson(lessonId:number) {
  return prisma.aulas.delete({
    where: {id: lessonId}
  })
}

export {
    findLessons,
    findClass,
    findSubject,
    findDuplicateLesson,
    insertLesson,
    getLessonById,
    updateLesson,
    deleteLesson
}


