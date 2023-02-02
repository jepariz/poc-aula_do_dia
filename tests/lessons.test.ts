import app from "../src";
import supertest from "supertest";
import prisma from "database/database";
import {createLesson, getLessonId } from "./factories";

const api = supertest(app)


type AulaEntity = {
    id: number,
    data:Date,
    turma_id: number,
    materia_id: number,
    conteudo_previsto: string,
    created_at:Date
}

type Aula = Omit<AulaEntity, "id" | "created_at">

afterAll(async () => {
    await prisma.aulas.deleteMany({})
    await prisma.turmas.deleteMany({})
    await prisma.materias.deleteMany({})
    await prisma.$disconnect();
})

describe ('POST /aulas', () => {

    let lesson: Aula;

    it('Should respond with status 422 if no body', async () => {
        const result = await api.post('/aulas').send({})
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 422 if invalid body', async () => {


        const body ={
            conteudo_previsto: "teste de post"
         }

        const result = await api.post('/aulas').send(body)
        expect(result.status).toEqual(422)
    })
    

    it("returns 201 for valid params and 409 if lesson already exists", async () => {

      lesson = await createLesson()
  
        const result = await api.post("/aulas").send(lesson);
        const status = result.status;
            
        expect(status).toEqual(201);
        });

    it("returns 409 if lesson already exists", async () => {
  
        const result = await api.post("/aulas").send(lesson);
          
        const status = result.status;
            
        expect(status).toEqual(409);
    });

    afterEach(async () => {
        await prisma.aulas.deleteMany({})
        await prisma.turmas.deleteMany({})
        await prisma.materias.deleteMany({})
    })
  
})

describe('UPDATE /aulas', () => { 

    let lesson: Aula;
    let lessonId: number;

    it('Should respond with status 422 if no body', async () => {

        lesson = await createLesson()
  
        const lessonResponse = await api.post("/aulas").send(lesson);
        const lessonId = lessonResponse.body.id

        const result = await api.put(`/aulas/${lessonId}`).send()
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 422 if invalid body', async () => {

        const lessonResponse = await api.post("/aulas").send(lesson);
        lessonId = lessonResponse.body.id

        const body ={
            id: lessonId,
            conteudo_previsto: ""
         }

        const result = await api.put(`/aulas/${lessonId}`).send(body)
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 404 if no lesson', async () => {

        const body ={
            conteudo_previsto: "novo conteúdo"
         }

        const result = await api.put(`/aulas/1`).send(body)
        expect(result.status).toEqual(404)
    })
    

    it('Should respond with status 200 if updated', async () => {

        const lesson2 = await createLesson()

        const lessonResponse = await api.post("/aulas").send(lesson2);
        lessonId = lessonResponse.body.id

        const body ={
            conteudo_previsto: "novo conteúdo"
         }

        const result = await api.put(`/aulas/${lessonId}`).send(body)
        expect(result.status).toEqual(200)
    })

    afterAll(async () => {
        await prisma.aulas.deleteMany({})
        await prisma.turmas.deleteMany({})
        await prisma.materias.deleteMany({})
    })
})

// describe ('GET /aulas', () => {

//     it('Should respond with status 404 if no lesson',async () => {

//         const result = await api.get('/aulas')
//         console.log(result.body)
//         expect (result.status).toBe(404)
//     })

// })