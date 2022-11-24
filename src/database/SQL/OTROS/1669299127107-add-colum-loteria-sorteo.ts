import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumLoteriaSorteo1669299127107 implements MigrationInterface {
  name = 'addColumLoteriaSorteo1669299127107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "loterias" ADD "comentarios" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sorteos" ADD "comentarios" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "sorteos" DROP COLUMN "comentarios"`);
    await queryRunner.query(`ALTER TABLE "loterias" DROP COLUMN "comentarios"`);
  }
}
