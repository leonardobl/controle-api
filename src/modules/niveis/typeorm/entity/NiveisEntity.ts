import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
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

  @ManyToMany(() => ChavesEntity, { eager: true, cascade: true })
  @JoinColumn()
  chaves: ChavesEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default NiveisEntity;
