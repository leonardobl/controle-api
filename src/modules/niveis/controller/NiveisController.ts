import { Request, response, Response } from "express";

import CreateNivelService from "../services/CreateNivelService";
import ListNiveisService from "../services/ListNiveisService";

interface IRequest {
  numero: number;
  nome: string;
  descricao: string;
}
class NiveisController {
  async index(request: Request, response: Response): Promise<Response> {
    const niveis = await ListNiveisService.execute();
    return response.status(200).json(niveis);
  }

  async create({ nome, numero, descricao }: IRequest): Promise<Response> {
    const nivel = await CreateNivelService.execute({ nome, numero, descricao });
    return response.status(201).json(nivel);
  }
}

export default new NiveisController();
