import { Request, Response } from "express";
import httpStatus from "http-status";
import { findAllSubjects} from "../repositories/subjects-repositories";
import { insertNewSubject, deleteSubjectById } from "../services/subjects-services";
import { Subject } from "../types/lessons.type";


async function createNewSubject(req: Request, res: Response){

    const newSubject = res.locals.nome 

    try{
    await insertNewSubject(newSubject)
    res.sendStatus(201)

    }catch(error) {
        res.status(409).send(error)
    }
}

async function listSubjects(req:Request, res: Response) {
   
    const resultado = await findAllSubjects();

    if(resultado.length === 0){
        return res.status(404).send(httpStatus[404])
    }

    return res.status(200).send(resultado)
}

async function deleteSubject(req: Request, res: Response) {
    
    const id = Number(req.params.id)

    try{
        await deleteSubjectById(id)
        res.sendStatus(200)
    
        }catch(error) {
            if(error === "Unprocessable Entity"){
                res.sendStatus(422)
            } 
            if(error === "Not Found"){
                res.sendStatus(404)
        }
        }
    
}

export{
    createNewSubject,
    listSubjects,
    deleteSubject
}