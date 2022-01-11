import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import MagalusRepository from "../typeorm/repository/MagalusRepository";

class DeleteMagaluService {
  public async execute(matricula: number) {
    const magaluRepository = getCustomRepository(MagalusRepository);
    const magalu = await magaluRepository.findByMatricula(matricula);
    if (!magalu) {
      throw new AppError("This matricula not exists");
    }

    await magaluRepository.remove(magalu);
  }
}

export default new DeleteMagaluService();
