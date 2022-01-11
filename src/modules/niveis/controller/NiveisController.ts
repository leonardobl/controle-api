import { Request, Response } from "express";

import CreateNivelService from "../services/CreateNivelService";
import ListNiveisService from "../services/ListNiveisService";
import RemoveNivelService from "../services/RemoveNivelService";
import UpdateNivelService from "../services/UpdateNivelService";

class NiveisController {
  async index(request: Request, response: Response): Promise<Response> {
    const niveis = await ListNiveisService.execute();
    return response.status(200).json(niveis);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { nome, numero, descricao } = request.body;
    const nivel = await CreateNivelService.execute({ nome, numero, descricao });
    return response.status(201).json(nivel);
  }

  async remove(request: Request, response: Response) {
    const numero = Number(request.params.numero);
    await RemoveNivelService.execute(numero);
    return response.status(200).json({});
  }

  async update(request: Request, response: Response) {
    const nivelUpdated = await UpdateNivelService.execute({ ...request.body });
    return response.status(200).json(nivelUpdated);
  }
}

export default new NiveisController();
