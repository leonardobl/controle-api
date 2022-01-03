import { MigrationInterface, QueryRunner } from "typeorm";

export default class teste1641173951246 implements MigrationInterface {
  name = "teste1641173951246";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "chaves_niveis" ("chavesId" uuid NOT NULL, "niveisId" uuid NOT NULL, CONSTRAINT "PK_e0b7c1a868873f4f8f9c553f2c5" PRIMARY KEY ("chavesId", "niveisId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5729c2ed0fa877c7728e54ff62" ON "chaves_niveis" ("chavesId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7b04a944737c2ee5b04da4033d" ON "chaves_niveis" ("niveisId") `
    );
    await queryRunner.query(`ALTER TABLE "armariosEmUso" DROP COLUMN "time"`);
    await queryRunner.query(
      `ALTER TABLE "armariosEmUso" ADD "time" date NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "niveis" ALTER COLUMN "descricao" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "chaves" ALTER COLUMN "descricao" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "magalus" ALTER COLUMN "cargo" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "magalus" ALTER COLUMN "cd" SET NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "chaves_niveis" ADD CONSTRAINT "FK_5729c2ed0fa877c7728e54ff628" FOREIGN KEY ("chavesId") REFERENCES "chaves"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "chaves_niveis" ADD CONSTRAINT "FK_7b04a944737c2ee5b04da4033d7" FOREIGN KEY ("niveisId") REFERENCES "niveis"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "chaves_niveis" DROP CONSTRAINT "FK_7b04a944737c2ee5b04da4033d7"`
    );
    await queryRunner.query(
      `ALTER TABLE "chaves_niveis" DROP CONSTRAINT "FK_5729c2ed0fa877c7728e54ff628"`
    );
    await queryRunner.query(
      `ALTER TABLE "magalus" ALTER COLUMN "cd" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "magalus" ALTER COLUMN "cargo" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "chaves" ALTER COLUMN "descricao" DROP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "niveis" ALTER COLUMN "descricao" DROP NOT NULL`
    );
    await queryRunner.query(`ALTER TABLE "armariosEmUso" DROP COLUMN "time"`);
    await queryRunner.query(
      `ALTER TABLE "armariosEmUso" ADD "time" TIMESTAMP NOT NULL`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_7b04a944737c2ee5b04da4033d"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5729c2ed0fa877c7728e54ff62"`
    );
    await queryRunner.query(`DROP TABLE "chaves_niveis"`);
  }
}
