import { MigrationInterface, QueryRunner } from 'typeorm';

export class firstMigrations1669324725979 implements MigrationInterface {
  name = 'firstMigrations1669324725979';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "loterias" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "abreviatura" character varying NOT NULL, "img_url" character varying NOT NULL, "descripcion" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_08cf3ed4e72faf9e567c09b5102" UNIQUE ("name"), CONSTRAINT "UQ_c53f058bb29ef5d949f3bb2da1e" UNIQUE ("abreviatura"), CONSTRAINT "PK_71613e8c0e480eb1d8e73f3ce41" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "juegos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "abreviatura" character varying NOT NULL, "img_url" character varying NOT NULL, "descripcion" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "posiciones" integer NOT NULL, "rango_minimo" integer NOT NULL, "rango_maximo" integer NOT NULL, "loteria_id" integer, CONSTRAINT "PK_c24230175818db5b1d251cebb75" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sorteos" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "abreviatura" character varying NOT NULL, "img_url" character varying NOT NULL, "descripcion" character varying NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_04e4ccb8f2ae243a86d4826d7ba" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "juegos" ADD CONSTRAINT "FK_7a656bda97c426defb867cc4a6d" FOREIGN KEY ("loteria_id") REFERENCES "loterias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "juegos" DROP CONSTRAINT "FK_7a656bda97c426defb867cc4a6d"`,
    );
    await queryRunner.query(`DROP TABLE "sorteos"`);
    await queryRunner.query(`DROP TABLE "juegos"`);
    await queryRunner.query(`DROP TABLE "loterias"`);
  }
}
