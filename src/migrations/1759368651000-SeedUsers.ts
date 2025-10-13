import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUsers1759368651000 implements MigrationInterface {
    name = 'SeedUsers1759368651000'
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO user (name, email, password, age) VALUES
            ('Alice Johnson', 'anajhonson@gmail.com', 'password123', 28),
            ('Bob Smith', 'bsmith@gmail.com', 'password456', 35)

            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM user WHERE email IN ('anajhonson@gmail.com', 'bsmith@gmail.com')`)

    }
}
