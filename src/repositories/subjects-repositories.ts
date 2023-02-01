import prisma from "../database/database";
import { Subject } from "../types/lessons.type";


async function findSubject(subjectName:string): Promise<Subject>{
    return prisma.materias.findFirst({
      where:{
        nome: subjectName
      }
    })
}

async function insertSubject(subjectName:Subject) {
    return prisma.materias.create({
      data:{
        nome: subjectName.nome
      }
    })
}

async function findAllSubjects() {
    return prisma.materias.findMany()
}

async function findSubjectById(subjectId:number){
    return prisma.materias.findFirst({
      where:{
        id: subjectId
      }
    })
}

async function deleteSubject(subjectId: number){
    return prisma.materias.delete({
      where:{
        id: subjectId
      }
    })
}

export {
    findSubject,
    findAllSubjects,
    findSubjectById,
    deleteSubject,
    insertSubject
}