-- CreateTable
CREATE TABLE "aulas" (
    "id" SERIAL NOT NULL,
    "data" DATE NOT NULL,
    "turma_id" INTEGER NOT NULL,
    "materia_id" INTEGER NOT NULL,
    "conteudo_previsto" TEXT NOT NULL,
    "created_at" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "materias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turmas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "materias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "turmas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
