import { getCustomRepository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import NiveisEntity from "../typeorm/entity/NiveisEntity";
import NiveisRepository from "../typeorm/repository/NiveisRepository";

interface IRequest {
  numero: number;
  nome: string;
  descricao?: string;
}

class UpdateNivelService {
  async execute(request: IRequest): Promise<NiveisEntity> {
    const repository = getCustomRepository(NiveisRepository);
    const nivel = await repository.findByNumero(request.numero);
    if (!nivel) {
      throw new AppError("Nivel n ot found");
    }
    const nivelupdated = await repository.merge(nivel, { ...request });
    await repository.save(nivelupdated);
    return nivelupdated;
  }
}

export default new UpdateNivelService();
