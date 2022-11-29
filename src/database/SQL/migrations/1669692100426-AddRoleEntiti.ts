import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleEntiti1669692100426 implements MigrationInterface {
    name = 'AddRoleEntiti1669692100426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "role" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    }

}
