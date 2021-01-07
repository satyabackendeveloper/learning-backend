import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class UserFriend1609934940480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user_friend",
            columns: [
                {
                    name: "id",
                    type: "char",
                    length: "36",
                    isPrimary: true,
                },
                {
                    name: "requester_id",
                    type: "char",
                    length: "36",
                    isNullable: false
                },
                {
                    name: "requestee_id",
                    type: "char",
                    length: "36",
                    isNullable: false
                }
            ]
        }), true)

        // Foreign Keys
        await queryRunner.createForeignKey("user_friend", new TableForeignKey({
            columnNames: ["requester_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
        await queryRunner.createForeignKey("user_friend", new TableForeignKey({
            columnNames: ["requestee_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("user_friend");
        const requesterForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("requester_id") !== -1);
        await queryRunner.dropForeignKey("user_friend", requesterForeignKey);
        await queryRunner.dropColumn("user_friend", "requester_id");
        const requesteeForeignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("requestee_id") !== -1);
        await queryRunner.dropForeignKey("user_friend", requesteeForeignKey);
        await queryRunner.dropColumn("user_friend", "requestee_id");
        await queryRunner.dropTable("user_friend");
    }

}
