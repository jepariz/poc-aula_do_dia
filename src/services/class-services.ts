import { findClass, insertClass, findClassById, deleteClass } from "../repositories/class-repositories.js";
import { Class } from "../types/lessons.type.js";


async function insertNewClass(className:Class) {

    const nome = className.nome.toLocaleLowerCase()

    const newClass = await findClass(nome)

    if(newClass){
        throw ("Turma já cadastrada")
    }
    
    await insertClass(className)
}

async function deleteClassById(classId:number) {


    const classExists = await findClassById(classId)

    if(!classExists){
        throw ("Essa turma não existe")
    }
    
    await deleteClass(classId)
}


export {
    insertNewClass,
    deleteClassById
}