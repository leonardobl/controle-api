import { getRepository } from "typeorm";

import ChavesEntity from "../typeorm/entity/ChavesEntity";

class ListChavesService {
  async execute() {
    const repository = getRepository(ChavesEntity);
    try {
      const chaves = await repository.find();
      return chaves;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}

export default new ListChavesService();
