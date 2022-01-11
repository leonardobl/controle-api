import { getCustomRepository } from "typeorm";

import ArmariosEmUso from "../typeorm/entity/ArmariosEmUsoEntity";
import ArmarioEmUsoRepository from "../typeorm/repository/ArmarioEmUsoRepository";

class ListArmariosEmUso {
  public async execute(): Promise<ArmariosEmUso[]> {
    const repository = getCustomRepository(ArmarioEmUsoRepository);
    const armariosEmUso = await repository.find();
    return armariosEmUso;
  }
}

export default new ListArmariosEmUso();
