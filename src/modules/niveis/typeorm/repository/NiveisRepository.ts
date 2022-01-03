import { EntityRepository, Repository } from "typeorm";

import NiveisEntity from "../entity/NiveisEntity";

@EntityRepository(NiveisEntity)
class NiveisRepository extends Repository<NiveisEntity> {
  async findByNumero(numero: number): Promise<NiveisEntity | undefined> {
    const nivel = await this.findOne({ where: { numero } });
    return nivel;
  }
}

export default NiveisRepository;
