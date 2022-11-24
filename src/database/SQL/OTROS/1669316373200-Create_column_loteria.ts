import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateColumnLoteria1669316373200 implements MigrationInterface {
  name = 'CreateColumnLoteria1669316373200';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "loterias" ADD "prueba_leni" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "loterias" DROP COLUMN "prueba_leni"`);
  }
}
