import { Router } from "express";

import ChavesController from "../controller/ChavesController";

const chavesRoutes = Router();
const chavesController = new ChavesController();

chavesRoutes.post("/", chavesController.create);
chavesRoutes.get("/", chavesController.index);
chavesRoutes.patch("/", chavesController.update);

export default chavesRoutes;
