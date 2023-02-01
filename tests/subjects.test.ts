import app from "../src";
import supertest from "supertest";
import prisma from "database/database";

const api = supertest(app)

beforeAll(async () => {
    await prisma.materias.deleteMany({})
   })

afterAll(async () => {
    await prisma.$disconnect();
});

let idUltimaMateria: number;


describe ('POST /materias', () => {
    it('Should respond with status 422 if no body', async () => {
        const result = await api.post('/materias').send({})
        expect(result.status).toEqual(422)
    })

    it('Should respond with status 422 if invalid body', async () => {
        const result = await api.post('/materias').send({"nome": ""})
        expect(result.status).toEqual(422)
    })


    it("returns 200 for valid params", async () => {
            const body = {
              nome: 'literatura'
            };
      
            const result = await api.post("/materias").send(body);
            const status = result.status;

            const materiaCriada = await prisma.materias.findFirst({
				where: { nome: body.nome }
			});

            idUltimaMateria = materiaCriada.id
            
            expect(status).toEqual(200);
			expect(materiaCriada).not.toBeNull();
        });
  
})


describe ('DELETE /materias', () => {
    it('Should respond with status 404 if no params', async () => {

        const result = await api.delete(`/materias`)
        expect(result.status).toEqual(404)
    })

    it('Should respond with status 422 if invalid params', async () => {

        const id = "abc"

        const result = await api.delete(`/materias/${id}`)
        expect(result.status).toEqual(422)
    })


    it("returns 200 for valid params", async () => {
            
            const id = idUltimaMateria
      
            const result = await api.delete(`/materias/${id}`)
            expect(result.status).toEqual(200)
        });
  
})

describe ('GET /materias', () => {

    it('Should respond with status 404 if no class',async () => {
        const result = await api.get('/materias')
        expect (result.status).toBe(404)
    })
})