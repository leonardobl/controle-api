import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("magalus")
class Magalus {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("int")
  matricula: number;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  cargo: string;

  @Column("int")
  cd: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Magalus;
