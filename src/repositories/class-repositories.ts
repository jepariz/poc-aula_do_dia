import prisma from "../database/database.js";
import { Class } from "../types/lessons.type.js";


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

export {
    findClass,
    insertClass, 
    findAllClasses
}