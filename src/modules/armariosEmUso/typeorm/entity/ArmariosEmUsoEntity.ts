import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("armariosEmUso")
class ArmariosEmUso {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  identificacao: string;

  @Column("varchar")
  nome: string;

  @Column("int")
  numero: number;

  @Column("date")
  time: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ArmariosEmUso;
