import httpStatus from "http-status";
import { findSubject, insertSubject, findSubjectById, deleteSubject } from "../repositories/subjects-repositories";


async function insertNewSubject(subjectName: string) {

    const nome = subjectName.toLocaleLowerCase()

    const newSubject = await findSubject(nome)

    if(newSubject){
        throw httpStatus[409]
    }
    
    await insertSubject(subjectName)
}

async function deleteSubjectById(subjectId:number) {

    if(isNaN(subjectId)){
        throw httpStatus[422]
    }

    const subjectExists = await findSubjectById(subjectId)

    if(!subjectExists){
        throw httpStatus[404]
    }
    
    await deleteSubject(subjectId)
}


export {
   insertNewSubject,
   deleteSubjectById
}