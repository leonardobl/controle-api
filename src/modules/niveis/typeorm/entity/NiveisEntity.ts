import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
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

  @Column({ nullable: true, type: "varchar" })
  descricao: string;

  @ManyToMany(() => ChavesEntity, { eager: true })
  @JoinTable({ name: "chaves_niveis" })
  chaves: ChavesEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default NiveisEntity;
