import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import NiveisEntity from "../typeorm/entity/NiveisEntity";
import NiveisRepository from "../typeorm/repository/NiveisRepository";

interface IRquest {
  numero: number;
  nome: string;
  descricao: string;
}

class CreateNivelService {
  async execute({ nome, numero, descricao }: IRquest): Promise<NiveisEntity> {
    const repository = getCustomRepository(NiveisRepository);
    const nivelExists = await repository.findByNumero(numero);
    if (nivelExists) {
      throw new AppError("This nivel already exists");
    }
    const nivel = await repository.create({ nome, numero, descricao });
    await repository.save(nivel);
    return nivel;
  }
}

export default new CreateNivelService();
