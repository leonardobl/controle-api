import { Request, Response } from "express";

import CreateMagaluService from "../services/CreateMagaluService";
import DeleteMagaluService from "../services/DeleteMagaluService";
import ListMagalusService from "../services/ListMagalusService";
import UpdateMagaluService from "../services/UpdateMagaluService";

class MagalusController {
  public async create(
    resquest: Request,
    response: Response
  ): Promise<Response> {
    const data = resquest.body;
    const magalu = await CreateMagaluService.execute({ ...data });
    return response.status(201).json(magalu);
  }

  public async list(resquest: Request, response: Response): Promise<Response> {
    const magalus = await ListMagalusService.execute();
    return response.status(200).json(magalus);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const data = { ...request.body };
    const magalu = await UpdateMagaluService.execute({ ...data });
    return response.status(200).json(magalu);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const matricula = Number(request.params.matricula);
    await DeleteMagaluService.execute(matricula);
    return response.status(200).json({});
  }
}

export default new MagalusController();
