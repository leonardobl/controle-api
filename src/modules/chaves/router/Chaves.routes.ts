import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";

import ChavesController from "../controller/ChavesController";

const chavesRoutes = Router();
const chavesController = new ChavesController();

chavesRoutes.post("/", chavesController.create);
chavesRoutes.get("/", chavesController.index);
chavesRoutes.patch("/", chavesController.update);
chavesRoutes.delete(
  "/:numero",
  celebrate({
    [Segments.PARAMS]: {
      numero: Joi.number().required(),
    },
  }),
  chavesController.remove
);

export default chavesRoutes;
