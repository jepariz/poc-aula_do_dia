import prisma from "../database/database.js";

async function findClasses() {
    return prisma.aulas.findMany();
}

export {
    findClasses
}