import Joi from "joi";

 export const lessonSchema = Joi.object({
    data: Joi.date().required(),
    turma_id: Joi.number().required(),
    materia_id: Joi.number().required(),
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