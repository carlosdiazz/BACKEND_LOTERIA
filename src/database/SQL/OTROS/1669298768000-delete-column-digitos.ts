import { MigrationInterface, QueryRunner } from 'typeorm';

export class deleteColumnDigitos1669298768000 implements MigrationInterface {
  name = 'deleteColumnDigitos1669298768000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "juegos" DROP COLUMN "digitos"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "juegos" ADD "digitos" integer NOT NULL`,
    );
  }
}
