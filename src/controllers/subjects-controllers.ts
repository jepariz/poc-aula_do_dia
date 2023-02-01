import { Request, Response } from "express";
import { findAllSubjects} from "../repositories/subjects-repositories";
import { insertNewSubject, deleteSubjectById } from "../services/subjects-services";
import { Subject } from "../types/lessons.type";


async function createNewSubject(req: Request, res: Response){

    const newSubject = res.locals.nome 

    try{
    await insertNewSubject(newSubject)
    res.sendStatus(200)

    }catch(error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function listSubjects(req:Request, res: Response) {
   
    const resultado = await findAllSubjects();

    return res.send(resultado)
}

async function deleteSubject(req: Request, res: Response) {
    
    const id = Number(req.params.id)

    try{
        await deleteSubjectById(id)
        res.sendStatus(200)
    
        }catch(error) {
            console.error(error)
            res.sendStatus(500)
        }
    
}

export{
    createNewSubject,
    listSubjects,
    deleteSubject
}