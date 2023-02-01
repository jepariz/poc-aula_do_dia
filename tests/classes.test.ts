import app from "../src";
import supertest from "supertest";
import prisma from "database/database";

const api = supertest(app)

beforeEach(async () => {
    await prisma.turmas.deleteMany({})
   })

afterAll(async () => {
    await prisma.$disconnect();
});


describe ('POST /turmas', () => {
    it('Should respond with status 422 if no body', async () => {
        const result = await api.post('/turmas').send({})
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 422 if invalid body', async () => {
        const result = await api.post('/turmas').send({"nome": ""})
        expect(result.status).toEqual(422)
    })


    it("returns 200 for valid params", async () => {
            const body = {
              nome: '3D'
            };
      
            const result = await api.post("/turmas").send(body);
            const status = result.status;

            const turmaCriada = await prisma.turmas.findFirst({
				where: { nome: body.nome }
			});
            
            expect(status).toEqual(200);
			expect(turmaCriada).not.toBeNull();
        });
  
})

describe ('GET /turmas', () => {

    it('Should respond with status 404 if no class',async () => {
        const result = await api.get('/turmas')
        expect (result.status).toBe(404)
    })
})