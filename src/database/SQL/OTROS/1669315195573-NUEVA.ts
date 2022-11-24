import { MigrationInterface, QueryRunner } from 'typeorm';

export class NUEVA1669315195573 implements MigrationInterface {
  name = 'NUEVA1669315195573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "loterias" DROP COLUMN "comentarios"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "loterias" ADD "comentarios" character varying NOT NULL`,
    );
  }
}
