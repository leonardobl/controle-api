import { getRepository } from "typeorm";

import ChavesEntity from "../typeorm/entity/ChavesEntity";

class ListChavesService {
  async execute() {
    const repository = getRepository(ChavesEntity);
    const chaves = await repository.find();
    return chaves;
  }
}

export default new ListChavesService();
