import { getCustomRepository } from "typeorm";

import Magalus from "../typeorm/entity/MagalusEntity";
import MagalusRepository from "../typeorm/repository/MagalusRepository";

class ListMagalusService {
  public async execute(): Promise<Magalus[]> {
    const magalusRepository = getCustomRepository(MagalusRepository);
    const magalus = await magalusRepository.find();
    return magalus;
  }
}

export default new ListMagalusService();
