import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";

import { movieCreateValidation } from "./middleware/movieValidation";
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/movie", movieCreateValidation, validate, createMovie);
