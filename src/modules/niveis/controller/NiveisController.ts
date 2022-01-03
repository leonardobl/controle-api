import { Request, Response } from "express";

import ListNiveisService from "../services/ListNiveisService";

class NiveisController {
  async index(request: Request, response: Response): Promise<Response> {
    const niveis = await ListNiveisService.execute();
    return response.status(200).json(niveis);
  }
}

export default new NiveisController();
