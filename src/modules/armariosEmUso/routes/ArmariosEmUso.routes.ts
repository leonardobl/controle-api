import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";

import ArmariosEmUsoController from "../controller/ArmariosEmUsoController";

const armariosEmUsoRoutes = Router();

armariosEmUsoRoutes.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      identificacao: Joi.string().required(),
      nome: Joi.string(),
      numArmario: Joi.number().required(),
      time: Joi.date().required(),
    },
  }),
  ArmariosEmUsoController.create
);

armariosEmUsoRoutes.get("/", ArmariosEmUsoController.list);

armariosEmUsoRoutes.delete(
  "/:numArmario",
  celebrate({
    [Segments.PARAMS]: { numArmario: Joi.number().required() },
  }),
  ArmariosEmUsoController.remove
);

export default armariosEmUsoRoutes;
