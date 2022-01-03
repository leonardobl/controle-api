import { EntityRepository, Repository } from "typeorm";

import ChavesEntity from "../entity/ChavesEntity";

@EntityRepository(ChavesEntity)
class ChavesRepository extends Repository<ChavesEntity> {
  async findByNumero(numero: number): Promise<ChavesEntity | undefined> {
    const chave = await this.findOne({ where: { numero } });
    return chave;
  }
}

export default ChavesRepository;
