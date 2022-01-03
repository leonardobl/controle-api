import { Request, Response } from "express";

import CreateChaveService from "../services/CreateChaveService";
import ListChavesService from "../services/ListChavesService";
import UpdateChavesService from "../services/UpdateChavesService";

class ChavesController {
  async index(request: Request, response: Response): Promise<Response> {
    const chaves = await ListChavesService.execute();
    return response.status(200).json(chaves);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { nome, numero, descricao } = request.body;
    const chave = await CreateChaveService.execute({ nome, numero, descricao });
    return response.status(201).json(chave);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const chave = await UpdateChavesService.execute(request.body);
    return response.status(200).json(chave);
  }
}

export default ChavesController;
