import { Request, Response } from "express";
import httpStatus from "http-status";
import { findAllClasses } from "../repositories/class-repositories";
import {insertNewClass, deleteClassById} from "../services/class-services";

async function createNewClass(req: Request, res: Response){

    const newClass = res.locals.nome 
   
    try{
    await insertNewClass(newClass)
    res.sendStatus(201)

    }catch(error) {
        console.log(error)
        res.status(409).send(error)
    }
}

async function listClasses(req:Request, res: Response) {
   
    const resultado = await findAllClasses();

    if(resultado.length === 0){
        return res.status(404).send(httpStatus[404])
    }

    return res.status(200).send(resultado)
}

async function deleteClass(req: Request, res: Response) {
    
    const id = Number(req.params.id)

    try{
        await deleteClassById(id)
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
    createNewClass,
    listClasses,
    deleteClass
}