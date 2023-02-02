import app from "../src";
import supertest from "supertest";
import prisma from "database/database";
import {createLesson } from "./factories";

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

let lesson: Aula;

afterAll(async () => {
    await prisma.aulas.deleteMany({})
    await prisma.turmas.deleteMany({})
    await prisma.materias.deleteMany({})
    await prisma.$disconnect();
})


describe ('POST /aulas', () => {

    it('Should respond with status 422 if no body', async () => {
        const result = await api.post('/turmas').send({})
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 422 if invalid body', async () => {


        const body ={
            conteudo_previsto: "teste de post"
         }

        const result = await api.post('/turmas').send(body)
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
  
})