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
    },
  }),
  NiveisController.create
);

export default niveisRoutes;
