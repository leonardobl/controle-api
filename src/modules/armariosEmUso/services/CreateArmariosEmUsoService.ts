import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import ArmariosEmUso from "../typeorm/entity/ArmariosEmUsoEntity";
import ArmarioEmUsoRepository from "../typeorm/repository/ArmarioEmUsoRepository";

interface IRequest {
  identificacao: string;
  nome?: string;
  numero: number;
  time: Date;
}

class CreateArmariosEmUsoService {
  public async execute({
    nome,
    identificacao,
    time,
    numero,
  }: IRequest): Promise<ArmariosEmUso> {
    const armariosEmUsoRepository = getCustomRepository(ArmarioEmUsoRepository);
    const armamarioEmUsoAlreadyExists =
      await armariosEmUsoRepository.findByNumArmario(numero);
    if (armamarioEmUsoAlreadyExists) {
      throw new AppError("This armario already in use");
    }
    const armarioEmUso = armariosEmUsoRepository.create({
      identificacao,
      nome,
      numero,
      time,
    });

    armariosEmUsoRepository.save(armarioEmUso);
    return armarioEmUso;
  }
}

export default new CreateArmariosEmUsoService();
