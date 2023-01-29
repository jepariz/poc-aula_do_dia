import { findSubject, insertSubject, findSubjectById, deleteSubject } from "../repositories/subjects-repositories.js";
import { Subject } from "../types/lessons.type.js";


async function insertNewSubject(subjectName: Subject) {

    const nome = subjectName.nome.toLocaleLowerCase()

    const newSubject = await findSubject(nome)

    if(newSubject){
        throw ("Matéria já cadastrada")
    }
    
    await insertSubject(subjectName)
}

async function deleteSubjectById(subjectId:number) {


    const subjectExists = await findSubjectById(subjectId)

    if(!subjectExists){
        throw ("Essa matéria não existe")
    }
    
    await deleteSubject(subjectId)
}


export {
   insertNewSubject,
   deleteSubjectById
}