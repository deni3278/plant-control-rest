import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { LogController } from "./log.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Log, LogSchema } from "./log.schema";
import { Pairing, PairingSchema } from "../pairing/pairing.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }, {
    name: Pairing.name,
    schema: PairingSchema
  }])],
  controllers: [LogController],
  providers: [LogService]
})
export class LogModule {
}
