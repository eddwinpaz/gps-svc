import net from "net";
import { AppDataSource } from "./db/postgres";
import { Location } from "./entities/Location";

export const tcpHandler = (socket: net.Socket): void => {
    
        socket.on("data", async (data: Buffer) => {
        //   console.log(data.toString());
          if(data.toString().includes("GTHBD")){
            socket.write("+SACK:GTHBD");
          }

          if(data.toString().includes("+BUFF:GTFRI")){
            socket.write("+SACK:GTFRI");
            
            const raw: string = data.toString();
            const imei: string = raw.split(",")[2];
            const location: Location = new Location();
            location.imei = imei;
            location.raw = raw;

            await location.save();
          }
          // +BUFF:GTFRI,450102,865084030006793,,,10,1,5,3.5,0,592.8,-70.631011,-33.449598,20221112174035,0730,0001,32D5,5F15,00,0.0,,,,69,420000,,,,20221112174036,068F
        });
      
        socket.on("end", () => {
          console.log("Connection has been closed.");
        });
      
        socket.on("close", () => {
          console.log("Connection has been closed.");
        });
}