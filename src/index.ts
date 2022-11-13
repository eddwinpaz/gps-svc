import "reflect-metadata";
import net, { Server } from "net";
import { AppDataSource } from "./db/postgres";
import { tcpHandler } from "./tcpHandler";
const port: number = 7011;

const server: Server = net.createServer(tcpHandler);

server.on("error", (err: Error) => {
  throw err;
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
