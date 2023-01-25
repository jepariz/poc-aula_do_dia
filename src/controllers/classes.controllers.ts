import { Request, Response } from "express";
import { findClasses } from "../repositories/class-repositories.js";

async function listClasses(req: Request, res: Response) {
    const resultado = await findClasses();

    return res.send(resultado)
}

export{
    listClasses
}