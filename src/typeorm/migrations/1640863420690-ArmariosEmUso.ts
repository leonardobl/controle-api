import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ArmariosEmUso1640863420690 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "armariosEmUso",
        columns: [
          {
            name: "id",
            type: "uuid",
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
            isPrimary: true,
          },
          {
            name: "identificacao",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "numArmario",
            type: "int",
          },
          {
            name: "time",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp without time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp without time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("armariosEmUso");
  }
}
