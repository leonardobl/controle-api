import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Chaves1641137632284 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "chaves",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "numero",
            type: "int",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "descricao",
            type: "varchar",
            isNullable: true,
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
    await queryRunner.dropTable("chaves");
  }
}
