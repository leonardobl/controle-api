import { getCustomRepository, Repository } from "typeorm";

import AppError from "../../../shared/errors/AppError";
import ChavesRepository from "../../chaves/typeorm/repository/ChavesRepository";
import NiveisEntity from "../typeorm/entity/NiveisEntity";
import NiveisRepository from "../typeorm/repository/NiveisRepository";

interface IRequest {
  numero: number;
  nome?: string;
  descricao?: string;
  idChave?: string;
}

class UpdateNivelService {
  async execute(request: IRequest): Promise<NiveisEntity> {
    const nivelRepository = getCustomRepository(NiveisRepository);
    const chaveRepository = getCustomRepository(ChavesRepository);
    if (request.idChave) {
      const chave = await chaveRepository.findByIds([...request.idChave]);
      if (!chave) {
        throw new AppError("Chave not found");
      }

      const nivel = await nivelRepository.findByNumero(request.numero);

      if (!nivel) {
        throw new AppError("Nivel not found");
      }
      const nivelupdated = await nivelRepository.merge(nivel, { ...request });
      nivelupdated.chaves = [...chave];
      await nivelRepository.save(nivelupdated);
      return nivelupdated;
    }

    const nivel = await nivelRepository.findByNumero(request.numero);

    if (!nivel) {
      throw new AppError("Nivel not found");
    }
    const nivelupdated = await nivelRepository.merge(nivel, { ...request });
    await nivelRepository.save(nivelupdated);
    return nivelupdated;
  }
}

export default new UpdateNivelService();
