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

type SubjectEntity = {
    id: number,
    nome: string
}

type Subject = Omit<SubjectEntity, "id">

export{
    LessonEntity,
    Lesson,
    Class,
    Subject
}