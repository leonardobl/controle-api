import { getCustomRepository } from "typeorm";

import NiveisRepository from "../typeorm/repository/NiveisRepository";

class ListNiveisService {
  async execute() {
    const repository = getCustomRepository(NiveisRepository);
    const niveis = await repository.find();
    return niveis;
  }
}

export default new ListNiveisService();
