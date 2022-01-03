import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import ChavesEntity from "../typeorm/entity/ChavesEntity";
import ChavesRepository from "../typeorm/repository/ChavesRepository";

interface IRequest {
  nome: string;
  numero: number;
  descricao: string;
}

class CreateChaveService {
  async execute({ nome, numero, descricao }: IRequest): Promise<ChavesEntity> {
    const repository = getCustomRepository(ChavesRepository);
    const isAlreadyExists = await repository.findByNumero(numero);
    if (isAlreadyExists) {
      throw new AppError("Chave already exists");
    }
    const chave = repository.create({ nome, numero, descricao });
    await repository.save(chave);
    return chave;
  }
}

export default new CreateChaveService();
