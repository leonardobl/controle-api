import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import Magalus from "../typeorm/entity/MagalusEntity";
import MagalusRepository from "../typeorm/repository/MagalusRepository";

interface IRequest {
  matricula: number;
  nome: string;
  cargo?: string;
  cd?: number;
}

class UpdateMagaluService {
  public async execute({
    matricula,
    nome,
    cargo,
    cd,
  }: IRequest): Promise<Magalus> {
    const magaluRepository = getCustomRepository(MagalusRepository);

    const magalu = await magaluRepository.findByMatricula(matricula);
    if (!magalu) {
      throw new AppError("this matricula not exists");
    }

    Object.assign(magalu, { matricula, nome, cargo, cd });
    await magaluRepository.save(magalu);
    return magalu;
  }
}

export default new UpdateMagaluService();
