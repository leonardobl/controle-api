import { Request, Response } from "express";

interface IRequest {
  request: Request;
  response: Response;
}

class MagalusController {
  public async create({ resquest, response }: IRequest): Promise<Response> {}
}

export default new MagalusController();
