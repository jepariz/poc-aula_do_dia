import express, {Request, Response} from "express";
import classesRouter from "./routes/classes.routes.js";


const app = express();
app
  .use(express.json())
  .use("/health", (req: Request, res:Response ) => {
    res.send("ok")
  })
  .use(classesRouter)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running in port ${port}`));
export default app;