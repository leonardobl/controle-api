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

magalusRoutes.get("/", MagalusController.list);

magalusRoutes.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      matricula: Joi.number().required(),
      nome: Joi.string().required(),
      cargo: Joi.string(),
      cd: Joi.number(),
    },
  }),
  MagalusController.update
);

magalusRoutes.delete(
  "/:matricula",
  celebrate({
    [Segments.PARAMS]: {
      matricula: Joi.number().required(),
    },
  }),
  MagalusController.delete
);

export default magalusRoutes;
