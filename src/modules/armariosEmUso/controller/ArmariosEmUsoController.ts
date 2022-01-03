import { Request, Response } from "express";

import CreateArmariosEmUsoService from "../services/CreateArmariosEmUsoService";
import DeleteArmariosEmUsoService from "../services/DeleteArmariosEmUsoService";
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

  public async remove(request: Request, response: Response): Promise<Response> {
    const numArmario = Number(request.params.numArmario);
    await DeleteArmariosEmUsoService.execute(numArmario);
    return response.status(200).json({});
  }
}

export default new ArmariosEmUsoController();
