import { Router } from "express";

import ArmariosEmUsoRoutes from "../modules/armariosEmUso/routes/ArmariosEmUso.routes";
import chavesRoutes from "../modules/chaves/router/Chaves.routes";
import magalusRoutes from "../modules/magalus/routes/Magalus.routes";

const routes = Router();

routes.use("/magalus", magalusRoutes);
routes.use("/armariosemuso", ArmariosEmUsoRoutes);
routes.use("/chaves", chavesRoutes);

export default routes;
