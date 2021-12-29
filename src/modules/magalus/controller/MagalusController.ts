import { Request, Response } from "express";

import CreateMagaluService from "../services/CreateMagaluService";

class MagalusController {
  public async create(resquest: Request, response: Response) {
    const data = resquest.body;
    const magalu = await CreateMagaluService.execute({ ...data });
    return response.status(201).json(magalu);
  }
}

export default new MagalusController();
