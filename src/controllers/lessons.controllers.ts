import { Request, Response } from "express";
import { Lesson } from "../types/lessons.type";
import {createLesson, findLessonById, updateLessonById, deleteLessonById, findAllLesson} from "../services/lessons-services"
import httpStatus from "http-status";


async function listLessons(req: Request, res: Response) {

    try{
        const resultado = await findAllLesson();
        return res.send(resultado)
    
        }catch(error) {
            res.status(404).send(error)
        }   
}

async function createNewLesson(req: Request, res: Response){

    const lesson = res.locals as Lesson

    try{
    const newLesson = await createLesson(lesson)
    res.status(201).send(newLesson)

    }catch(error) {
        res.status(409).send(error)
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
           const update = await updateLessonById(data.id, data.conteudo)
            res.status(200).send(update)
        }catch(error) {
            if(error === "Unprocessable Entity"){
                res.status(422).send(error)
            } 
            if(error === "Not Found"){
                res.sendStatus(404)
     } 
}
}

async function deleteLesson(req: Request, res: Response) {
    const id = Number(req.params.id)

    try{
        await deleteLessonById(id)
         res.sendStatus(200)
     }catch(error) {
        if(error === "Unprocessable Entity"){
            res.status(422).send(error)
        } 
        if(error === "Not Found"){
            res.sendStatus(404)
  } 
}
}

export{
    listLessons,
    createNewLesson,
    listLessonsById,
    updateLesson,
    deleteLesson
}

