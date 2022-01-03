import { getCustomRepository } from "typeorm";

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
    const nivel = await repository.create({ nome, numero, descricao });
    return nivel;
  }
}

export default new CreateNivelService();
