import { type } from "os";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import NiveisEntity from "../../../niveis/typeorm/entity/NiveisEntity";

@Entity("chaves")
class ChavesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("int")
  numero: number;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  descricao: string;

  @ManyToMany((type) => NiveisEntity, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  niveis: NiveisEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ChavesEntity;
