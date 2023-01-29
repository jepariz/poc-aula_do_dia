import { Request, Response } from "express";
import { findAllClasses } from "../repositories/class-repositories.js";
import insertNewClass from "../services/class-services.js";
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

export{
    createNewClass,
    listClasses
}