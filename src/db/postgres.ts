import { DataSource } from "typeorm";
import { Location } from "../entities/Location";

export const AppDataSource = new DataSource({
  host: "localhost",
  username: "eddwinpaz",
  password: "eddwinpaz",
  port: 5432,
  entities: [Location],
  database: "gps",
  type: 'postgres',
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))