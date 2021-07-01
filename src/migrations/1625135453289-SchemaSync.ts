import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1625135453289 implements MigrationInterface {
  name = 'SchemaSync1625135453289';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "description" TO "desc"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" RENAME COLUMN "desc" TO "description"`,
    );
  }
}
