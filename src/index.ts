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

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port ${port}`));


export default app;