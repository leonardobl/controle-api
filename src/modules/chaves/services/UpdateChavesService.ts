import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import NiveisEntity from "../../niveis/typeorm/entity/NiveisEntity";
import ChavesEntity from "../typeorm/entity/ChavesEntity";
import ChavesRepository from "../typeorm/repository/ChavesRepository";

interface IRequest {
  numero: number;
  nome?: string;
  descricao?: string;
  niveis?: NiveisEntity[];
}

class UpdateChavesService {
  async execute(request: IRequest): Promise<ChavesEntity> {
    const repository = getCustomRepository(ChavesRepository);
    const chave = await repository.findByNumero(request.numero);
    if (!chave) {
      throw new AppError("Chave not found");
    }
    const novaChave = await repository.merge(chave, { ...request });
    return novaChave;
  }
}

export default new UpdateChavesService();
