import { Request, Response } from "express";

import CreateMagaluService from "../services/CreateMagaluService";
import ListMagalusService from "../services/ListMagalusService";
import Magalus from "../typeorm/entity/MagalusEntity";

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
}

export default new MagalusController();
