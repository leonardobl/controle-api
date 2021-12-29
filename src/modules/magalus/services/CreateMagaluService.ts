import { getCustomRepository } from "typeorm";

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
    const isAlreadyExists = await magalusRepository.findByMatricula(matricula);
  }
}
