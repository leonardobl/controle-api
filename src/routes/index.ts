import { Router } from "express";

import magalusRoutes from "../modules/magalus/routes/Magalus.routes";

const routes = Router();

routes.use("/magalus", magalusRoutes);

export default routes;
