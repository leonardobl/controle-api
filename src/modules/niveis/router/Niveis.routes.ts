import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";

import NiveisController from "../controller/NiveisController";

const niveisRoutes = Router();

niveisRoutes.get("/", NiveisController.index);

niveisRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      numero: Joi.number().required(),
      descricao: Joi.string(),
    },
  }),
  NiveisController.create
);

niveisRoutes.delete(
  "/:numero",
  celebrate({
    [Segments.PARAMS]: {
      numero: Joi.number().required(),
    },
  }),
  NiveisController.remove
);

niveisRoutes.patch(
  "/",
  celebrate({
    [Segments.BODY]: {
      numero: Joi.number().required(),
      nome: Joi.string(),
      idChave: Joi.array(),
    },
  }),
  NiveisController.update
);

export default niveisRoutes;
