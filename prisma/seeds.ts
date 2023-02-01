import prisma from "../src/database/database";

async function main() {
    await prisma.materias.createMany({
        data:[
            {
            "nome": "português"
            },
            {
            "nome": "inglês"
            },
            {
            "nome": "redação"
            },
    ]
    })
    await prisma.turmas.createMany({
        data: [
            {
                "nome": "1A"
            },
            {
                "nome": "2C",
            },
            {
                "nome": "3B",
            },
        ]
    });
    await prisma.aulas.createMany({
        data: [
            {
                "data": "2022-01-01T00:00:00.000Z",
                "turma_id": 1,
                "materia_id": 1,
                "conteudo_previsto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed augue nulla. Integer commodo lectus ut mi laoreet blandit. Aliquam."
            },
            {
                "data": "2022-01-01T00:00:00.000Z",
                "turma_id": 2,
                "materia_id": 1,
                "conteudo_previsto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed augue nulla. Integer commodo lectus ut mi laoreet blandit. Aliquam."
            },
            {
                "data": "2022-01-01T00:00:00.000Z",
                "turma_id": 1,
                "materia_id": 2,
                "conteudo_previsto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed augue nulla. Integer commodo lectus ut mi laoreet blandit. Aliquam."
            },

        ]
    })
}

main()
    .then(() => {
        console.log("Registros criados com sucesso!")
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })