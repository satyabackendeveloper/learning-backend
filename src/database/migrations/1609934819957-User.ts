import {MigrationInterface, QueryRunner, Table, TableUnique} from "typeorm";

export class User1609934819957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "char",
                    length: "36",
                    isPrimary: true,
                },
                {
                    name: "firstname",
                    type: "varchar",
                    isNullable: true,
                    length: "150"
                },
                {
                    name: "lastname",
                    type: "varchar",
                    isNullable: true,
                    length: "150"
                },
                {
                    name: "avatar",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable: false,
                    default: `CURRENT_TIMESTAMP`
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                    default: `CURRENT_TIMESTAMP`,
                    onUpdate: `CURRENT_TIMESTAMP`,
                },
            ]
        }), true)   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
