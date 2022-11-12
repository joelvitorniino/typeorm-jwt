import { config } from "dotenv"
import { DataSourceOptions } from "typeorm";

config();

export const configDatabase: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRE_HOST,
    port: 5432,
    username: process.env.POSTGRE_USER,
    password: process.env.POSTGRE_PASSWORD,
    database: 'ts-jwt',
    logging: false,
    entities: ["src/app/models/*.ts"],
    migrations: ["src/app/db/migration/*.ts"],
    migrationsTableName: "users",
}