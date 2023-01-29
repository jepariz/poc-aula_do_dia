import { findClass, insertClass } from "../repositories/class-repositories.js";
import { Class } from "../types/lessons.type.js";


export default async function insertNewClass(className:Class) {

    const nome = className.nome.toLocaleLowerCase()

    const newClass = await findClass(nome)

    if(newClass){
        throw ("Turma já cadastrada")
    }
    
    await insertClass(className)
}