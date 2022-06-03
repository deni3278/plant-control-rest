import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Logger, LoggerSchema } from "./logger.schema";
import { LoggerController } from "./logger.controller";
import { LoggerService } from "./logger.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Logger.name, schema: LoggerSchema }])],
  controllers: [LoggerController],
  providers: [LoggerService]
})
export class LoggerModule {
}
