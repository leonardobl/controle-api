import { celebrate, Segments, Joi } from "celebrate";
import { Router } from "express";

import MagalusController from "../controller/MagalusController";

const magalusRoutes = Router();

magalusRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      matricula: Joi.number().integer().required(),
      nome: Joi.string().required(),
      cargo: Joi.string(),
      cd: Joi.number().integer(),
    },
  }),
  MagalusController.create
);

export default magalusRoutes;
