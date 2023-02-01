import prisma from "../database/database";
import { Class } from "../types/lessons.type";


async function findClass(className:string): Promise<Class>{
    return prisma.turmas.findFirst({
      where:{
        nome: className
      }
    })
}

async function insertClass(className:Class) {
    return prisma.turmas.create({
      data:{
        nome: className.nome
      }
    })
}

async function findAllClasses() {
    return prisma.turmas.findMany()
}

async function findClassById(classId:number){
    return prisma.turmas.findFirst({
      where:{
        id: classId
      }
    })
}

async function deleteClass(classId: number){
    return prisma.turmas.delete({
      where:{
        id: classId
      }
    })
}

export {
    findClass,
    insertClass, 
    findAllClasses,
    findClassById,
    deleteClass
}