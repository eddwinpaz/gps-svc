import net, { Server } from "net";
const port: number = 7011;

const server: Server = net.createServer((socket) => {
  socket.on("data", (data: Buffer) => {
    socket.write("+SACK:GTHBD");
    console.log(data.toString());
  });

  socket.on("end", () => {
    console.log("Connection has been closed.");
  });

  socket.on("close", () => {
    console.log("Connection has been closed.");
  });

});

server.on("error", (err: Error) => {
  throw err;
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
