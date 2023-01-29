type LessonEntity = {
    id: number,
    data: Date,
    turma_id: number ,
    materia_id: number,
    conteudo_previsto: string, 
}


type Lesson = Omit<LessonEntity, "id">

type ClassEntity = {
    id: number,
    nome: string
}

type Class = Omit<ClassEntity, "id">


export{
    LessonEntity,
    Lesson,
    ClassEntity,
    Class
}