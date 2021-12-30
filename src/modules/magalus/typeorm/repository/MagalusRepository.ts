import { EntityRepository, Repository } from "typeorm";

import Magalus from "../entity/MagalusEntity";

@EntityRepository(Magalus)
class MagalusRepository extends Repository<Magalus> {
  public async findByMatricula(
    matricula: number
  ): Promise<Magalus | undefined> {
    const magalu = await this.findOne({ where: { matricula } });
    return magalu;
  }

  public async findByName(nome: string): Promise<Magalus | undefined> {
    const magalu = await this.findOne({ where: { nome } });
    return magalu;
  }
}

export default MagalusRepository;
