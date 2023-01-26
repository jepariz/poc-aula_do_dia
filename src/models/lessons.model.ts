import Joi from "joi";
import JoiDateFactory from "@joi/date";

 export const lessonSchema = Joi.object({
    data: Joi.date().required(),
    turma: Joi.string().required(),
    materia: Joi.string().required(),
    conteudo_previsto: Joi.string().required() 
})

export const nextLessonSchema = Joi.object({
    data: Joi.date().required(),
    conteudoPrevisto: Joi.string()
})

export const classSchema = Joi.object({
    nome: Joi.string().required()
})

export const subjectSchema = Joi.object({
    nome: Joi.string().required()
})