import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserTable1668259647137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users_tb',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    generationStrategy: 'identity'
                },

                {
                    name: 'username',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },

                {
                    name: 'password',
                    type: 'varchar',
                    length: '255'
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_tb');
    }

}
