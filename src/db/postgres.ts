import { DataSource } from "typeorm";
import { Location } from "../entities/Location";

export const AppDataSource = new DataSource({
  host: "localhost",
  username: "postgres",
  password: "postgres",
  port: 5432,
  entities: [Location],
  database: "gps",
  type: 'postgres',
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});