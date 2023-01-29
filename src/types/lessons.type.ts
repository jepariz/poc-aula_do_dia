type LessonEntity = {
    id: number,
    data: Date,
    turma_id: number ,
    materia_id: number,
    conteudo_previsto: string, 
}


type Lesson = Omit<LessonEntity, "id">


export{
    LessonEntity,
    Lesson
}