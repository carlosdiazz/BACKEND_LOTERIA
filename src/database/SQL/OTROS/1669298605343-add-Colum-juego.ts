import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumJuego1669298605343 implements MigrationInterface {
  name = 'addColumJuego1669298605343';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "juegos" ADD "digitos" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "juegos" DROP COLUMN "digitos"`);
  }
}
