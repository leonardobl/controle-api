import { Router } from "express";

import NiveisController from "../controller/NiveisController";

const niveisRoutes = Router();

niveisRoutes.get("/", NiveisController.index);

export default niveisRoutes;
