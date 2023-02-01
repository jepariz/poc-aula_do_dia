import express, {Request, Response} from "express";
import lessonsRoutes from "./routes/lessons.routes"
import classesRoutes from "./routes/classes.routes"
import SubjectsRoutes from "./routes/subjects.routes"

const app = express();
app
  .use(express.json())
  .use("/health", (req: Request, res:Response ) => {
    res.send("ok")
  })
  .use(lessonsRoutes)
  .use(classesRoutes)
  .use(SubjectsRoutes)

export default app;




