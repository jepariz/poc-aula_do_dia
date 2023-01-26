import { Request, Response, NextFunction} from "express";
import Joi from "joi";

export function validateSchema(schema: Joi.ObjectSchema<any>):
(req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        res.status(422).send(error.message);
        return
      }
  
      res.locals = req.body;
      next();
    };
  }