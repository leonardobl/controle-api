import { getCustomRepository, getRepository } from "typeorm";

import ChavesEntity from "../typeorm/entity/ChavesEntity";

class ListChavesService {
  async execute(): Promise<ChavesEntity[]> {
    const repository = getRepository(ChavesEntity);
    const chaves = await repository.find();
    return chaves;
  }
}

export default new ListChavesService();
