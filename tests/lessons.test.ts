// import app from "../src";
// import supertest from "supertest";
// import prisma from "database/database";

// const api = supertest(app)

// beforeAll(async () => {
//     await prisma.turmas.deleteMany({})
//    })

// afterAll(async () => {
//     await prisma.$disconnect();
//    })

// describe('Testando a API', () =>{

// it('Testando o POST: /turmas', async () => {
//    await api.post('/turmas').send({
//     "nome": "1A"
// })

// const resultado = await api.get('/turmas')

// expect(resultado.body).toHaveLength(1)

// })

// })