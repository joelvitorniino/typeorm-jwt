import { DataSource } from "typeorm";
import { configDatabase } from "../config/config";

export const AppDataSource = new DataSource(configDatabase);