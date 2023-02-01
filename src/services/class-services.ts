import httpStatus from "http-status";
import { findClass, insertClass, findClassById, deleteClass } from "../repositories/class-repositories";
import { Class } from "../types/lessons.type";


async function insertNewClass(className:string) {

    const nome = className

    const newClass = await findClass(nome)

    if(newClass){
        throw httpStatus[409]
    }

    await insertClass(className)
}

async function deleteClassById(classId:number) {


    const classExists = await findClassById(classId)

    if(!classExists){
        throw httpStatus[404]
    }
    
    await deleteClass(classId)
}


export {
    insertNewClass,
    deleteClassById
}