import {MigrationInterface, QueryRunner} from "typeorm";

export class teste1641923087216 implements MigrationInterface {
    name = 'teste1641923087216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "armariosEmUso" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificacao" character varying NOT NULL, "nome" character varying NOT NULL, "numero" integer NOT NULL, "time" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2ac188c4c2a776b09c151e4131f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "niveis" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "numero" integer NOT NULL, "nome" character varying NOT NULL, "descricao" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5941b22a8220b27feddf8bec1d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chaves" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "numero" integer NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_547ecdaa9c694db5f14bf632c76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "magalus" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "matricula" integer NOT NULL, "nome" character varying NOT NULL, "cargo" character varying NOT NULL, "cd" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a6b520100bcf3c438ec54aae390" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chaves_niveis" ("niveisId" uuid NOT NULL, "chavesId" uuid NOT NULL, CONSTRAINT "PK_7bc5928eb9fe1f3d238be9779d9" PRIMARY KEY ("niveisId", "chavesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0e5617a55c28266ba087fa6a0a" ON "chaves_niveis" ("niveisId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a89927b4aa5c779d40254ac9fa" ON "chaves_niveis" ("chavesId") `);
        await queryRunner.query(`ALTER TABLE "chaves_niveis" ADD CONSTRAINT "FK_0e5617a55c28266ba087fa6a0a7" FOREIGN KEY ("niveisId") REFERENCES "niveis"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "chaves_niveis" ADD CONSTRAINT "FK_a89927b4aa5c779d40254ac9fa5" FOREIGN KEY ("chavesId") REFERENCES "chaves"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chaves_niveis" DROP CONSTRAINT "FK_a89927b4aa5c779d40254ac9fa5"`);
        await queryRunner.query(`ALTER TABLE "chaves_niveis" DROP CONSTRAINT "FK_0e5617a55c28266ba087fa6a0a7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a89927b4aa5c779d40254ac9fa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0e5617a55c28266ba087fa6a0a"`);
        await queryRunner.query(`DROP TABLE "chaves_niveis"`);
        await queryRunner.query(`DROP TABLE "magalus"`);
        await queryRunner.query(`DROP TABLE "chaves"`);
        await queryRunner.query(`DROP TABLE "niveis"`);
        await queryRunner.query(`DROP TABLE "armariosEmUso"`);
    }

}
