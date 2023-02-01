import httpStatus from "http-status";
import { findClass, insertClass, findClassById, deleteClass } from "../repositories/class-repositories";


async function insertNewClass(className:string) {

    const nome = className

    const newClass = await findClass(nome)

    if(newClass){
        throw httpStatus[409]
    }

    await insertClass(className)
}

async function deleteClassById(classId:number) {

    if(isNaN(classId)){
        throw httpStatus[422]
    }

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