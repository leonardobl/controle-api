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

class CreateMagaluService {
  public async execute({
    matricula,
    nome,
    cargo,
    cd,
  }: IRequest): Promise<Magalus> {
    const magalusRepository = getCustomRepository(MagalusRepository);
    const isMatriculaAlreadyExists = await magalusRepository.findByMatricula(
      matricula
    );

    if (isMatriculaAlreadyExists) {
      throw new AppError("Matricula already exists");
    }

    const magalu = magalusRepository.create({
      matricula,
      nome,
      cargo,
      cd,
    });

    await magalusRepository.save(magalu);

    return magalu;
  }
}

export default new CreateMagaluService();
