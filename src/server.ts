import "express-async-errors";
import { errors } from "celebrate";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import routes from "./routes";
import AppError from "./shared/errors/AppError";

const app = express();

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.json({ message: "wellcome to index" });
});

export default app;
