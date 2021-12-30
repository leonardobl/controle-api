import { Request, Response } from "express";

import CreateArmariosEmUsoService from "../services/CreateArmariosEmUsoService";
import ListArmariosEmUsoService from "../services/ListArmariosEmUsoService";

class ArmariosEmUsoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const data = { ...request.body };
    const armarioEmUso = await CreateArmariosEmUsoService.execute({ ...data });
    return response.status(201).json(armarioEmUso);
  }

  public async list(request: Request, response: Response): Promise<Response> {
    const amariosEmUso = await ListArmariosEmUsoService.execute();
    return response.status(200).json(amariosEmUso);
  }
}

export default new ArmariosEmUsoController();
