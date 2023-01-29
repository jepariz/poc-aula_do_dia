import { Request, Response } from "express";
import { findAllClasses } from "../repositories/class-repositories.js";
import {insertNewClass, deleteClassById} from "../services/class-services.js";
import { Class } from "../types/lessons.type.js";

async function createNewClass(req: Request, res: Response){

    const newClass = res.locals as Class

    try{
    await insertNewClass(newClass)
    res.sendStatus(200)

    }catch(error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function listClasses(req:Request, res: Response) {
   
    const resultado = await findAllClasses();

    return res.send(resultado)
}

async function deleteClass(req: Request, res: Response) {
    
    const id = Number(req.params.id)

    try{
        await deleteClassById(id)
        res.sendStatus(200)
    
        }catch(error) {
            console.error(error)
            res.sendStatus(500)
        }
    
}

export{
    createNewClass,
    listClasses,
    deleteClass
}