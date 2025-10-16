import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedProducts1760588290987 implements MigrationInterface {
    name = 'SeedProducts1760588290987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO product ( name, price, category, description) VALUES
            ('Laptop', 1200.00, 'Computadores', 'Asus laptop with 16GB RAM'),
            ('Smartphone', 800.00, 'Electronics', 'Latest model smartphone with 128GB storage'),
            ('Headphones', 150.00, 'Accessories', 'Noise-cancelling over-ear headphones'),
            ('Monitor', 300.00, 'Electronics', '27-inch 4K UHD monitor'),
            ('Keyboard', 100.00, 'Accessories', 'Mechanical keyboard with RGB lighting');
            `)
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
