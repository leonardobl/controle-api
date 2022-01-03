import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import ChavesRepository from "../typeorm/repository/ChavesRepository";

class RemoveChaveService {
  async execute(numero: number) {
    const repository = getCustomRepository(ChavesRepository);
    const chave = await repository.findByNumero(numero);
    if (!chave) {
      throw new AppError("Chave not found");
    }
    await repository.remove(chave);
  }
}

export default new RemoveChaveService();
