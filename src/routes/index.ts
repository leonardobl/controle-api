import { Router } from "express";

import ArmariosEmUsoRoutes from "../modules/armariosEmUso/routes/ArmariosEmUso.routes";
import magalusRoutes from "../modules/magalus/routes/Magalus.routes";

const routes = Router();

routes.use("/magalus", magalusRoutes);
routes.use("/armariosemuso", ArmariosEmUsoRoutes);

export default routes;
