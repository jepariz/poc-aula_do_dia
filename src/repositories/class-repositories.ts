import prisma from "../database/database.js";
import { Lesson } from "../types/lessons.type.js";

async function findLessons() {
    return prisma.aulas.findMany();
}

async function insertLesson(lesson: Lesson) {

    const turma = await prisma.turmas.findFirst({ where: { nome: lesson.turmas } })

    const materia = await prisma.materias.findFirst({ where: { nome: lesson.materias } });

    return prisma.aulas.create({
        data: {
        data: lesson.data,
        conteudo_previsto: lesson.conteudo_previsto,
        turma_id: turma.id,
        materia_id: materia.id
        }
    })
}

export {
    findLessons,
    insertLesson
}

