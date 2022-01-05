import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import NiveisRepository from "../typeorm/repository/NiveisRepository";

class RemoveNivelService {
  async execute(numero: number) {
    const repository = getCustomRepository(NiveisRepository);
    const nivel = await repository.findByNumero(numero);
    if (!nivel) {
      throw new AppError("Nivel not found");
    }
    await repository.remove(nivel);
  }
}

export default new RemoveNivelService();
