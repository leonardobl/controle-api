import { getRepository } from "typeorm";

import ArmariosEmUso from "../typeorm/entity/ArmariosEmUsoEntity";

interface IRequest {
  identificacao: string;
  nome?: string;
  hora_inicial: Date;
}

class CreateArmariosEmUsoService {
  public async execute({
    nome,
    identificacao,
    hora_inicial,
  }: IRequest): Promise<ArmariosEmUso> {
    const armariosEmUsoRepository = getRepository(ArmariosEmUso);
    const armarioEmUso = armariosEmUsoRepository.create({
      identificacao,
      nome,
      hora_inicial,
    });
    return armarioEmUso;
  }
}

export default new CreateArmariosEmUsoService();
