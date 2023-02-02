import { faker } from '@faker-js/faker';
import prisma from 'database/database';

faker.locale = 'pt_BR'

export async function createClass() {
    return prisma.turmas.create({
      data: {
        id: faker.datatype.number(),
        nome: faker.word.noun(),
      }
    });
  }

  export async function createSubject() {
    return prisma.materias.create({
      data: {
        id: faker.datatype.number(),
        nome: faker.word.noun(),
      }
    });
  }


export async function createLesson() {

const turma = await createClass()

const materia = await createSubject()

const body = {
    data: faker.date.recent(),
    turma_id: turma.id ,
    materia_id: materia.id,
    conteudo_previsto: faker.lorem.sentence(),
}

    return body;
  }

export async function getLessonId() {

const lessons = await prisma.aulas.findMany()
return lessons
}