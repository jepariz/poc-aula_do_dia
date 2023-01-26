import { Request, Response } from "express";
import { findLessons, insertLesson } from "../repositories/class-repositories.js";
import { Lesson } from "../types/lessons.type.js";

async function listLessons(req: Request, res: Response) {
    const resultado = await findLessons();

    return res.send(resultado)
}

async function createNewLesson(req: Request, res: Response){

    const lesson = res.locals as Lesson

    try{
    await insertLesson(lesson)
    res.sendStatus(200)

    }catch(error) {
        console.error(error)
        res.sendStatus(500)
    }
}

export{
    listLessons,
    createNewLesson
}

