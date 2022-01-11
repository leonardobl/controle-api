import { Request, Response } from "express";

import CreateChaveService from "../services/CreateChaveService";
import ListChavesService from "../services/ListChavesService";
import RemoveChaveService from "../services/RemoveChaveService";
import UpdateChavesService from "../services/UpdateChavesService";

class ChavesController {
  async index(request: Request, response: Response): Promise<Response> {
    const chaves = await ListChavesService.execute();
    return response.status(200).json(chaves);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { nome, numero, descricao } = request.body;
    const chave = await CreateChaveService.execute({
      nome,
      numero,
      descricao,
    });
    return response.status(201).json(chave);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const chave = await UpdateChavesService.execute(request.body);
    return response.status(200).json(chave);
  }

  async remove(request: Request, response: Response) {
    const numero = Number(request.params.numero);
    await RemoveChaveService.execute(numero);
    return response.json({});
  }
}

export default ChavesController;
