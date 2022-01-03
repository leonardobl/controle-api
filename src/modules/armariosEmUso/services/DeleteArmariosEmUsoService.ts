import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import ArmarioEmUsoRepository from "../typeorm/repository/ArmarioEmUsoRepository";

class DeleteArmariosEmUsoService {
  public async execute(numAmario: number) {
    const repository = getCustomRepository(ArmarioEmUsoRepository);
    const armarioEmUso = await repository.findByNumArmario(numAmario);
    if (!armarioEmUso) {
      throw new AppError("This number of armario not exist");
    }
    await repository.remove(armarioEmUso);
  }
}

export default new DeleteArmariosEmUsoService();
