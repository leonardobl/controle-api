import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import ChavesEntity from "../../../chaves/typeorm/entity/ChavesEntity";

@Entity("niveis")
class NiveisEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("int")
  numero: number;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  descricao: string;

  chaves: ChavesEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default NiveisEntity;
