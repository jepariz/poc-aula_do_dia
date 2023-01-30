import { Request, Response } from "express";
import {findLessons} from "../repositories/lessons-repositories.js";
import { Lesson } from "../types/lessons.type.js";
import {createLesson, findLessonById, updateLessonById, deleteLessonById} from "../services/lessons-services.js"

async function listLessons(req: Request, res: Response) {
    const resultado = await findLessons();

    return res.send(resultado)
}

async function createNewLesson(req: Request, res: Response){

    const lesson = res.locals as Lesson

    try{
    await createLesson(lesson)
    res.sendStatus(200)

    }catch(error) {
        console.error(error)
        res.sendStatus(500)
    }
}

async function listLessonsById(req: Request, res: Response) {
    
    const id = Number(req.params.id)

    try{
       const lesson =  await findLessonById(id)
        res.status(200).send(lesson)
    
        }catch(error) {
            console.error(error)
            res.sendStatus(500)
        }
}

async function updateLesson(req: Request, res: Response) {

    const data = {
        id: Number(req.params.id),
        conteudo: req.body.conteudo_previsto as string
    } 

    try{
           await updateLessonById(data.id, data.conteudo)
            res.sendStatus(200)
        }catch(error) {
             console.error(error)
             res.sendStatus(500)
     } 
}

async function deleteLesson(req: Request, res: Response) {
    const id = Number(req.params.id)

    try{
        await deleteLessonById(id)
         res.sendStatus(200)
     }catch(error) {
          console.error(error)
          res.sendStatus(500)
  } 
}

export{
    listLessons,
    createNewLesson,
    listLessonsById,
    updateLesson,
    deleteLesson
}

