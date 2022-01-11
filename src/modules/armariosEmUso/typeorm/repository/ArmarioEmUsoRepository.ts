import { EntityRepository, Repository } from "typeorm";

import ArmariosEmUso from "../entity/ArmariosEmUsoEntity";

@EntityRepository(ArmariosEmUso)
class ArmarioEmUsoRepository extends Repository<ArmariosEmUso> {
  public async findByNumArmario(
    numero: number
  ): Promise<ArmariosEmUso | undefined> {
    const armarioEmUso = await this.findOne({ where: { numero } });
    return armarioEmUso;
  }
}

export default ArmarioEmUsoRepository;
