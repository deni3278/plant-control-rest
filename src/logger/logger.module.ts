import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {Logger, LoggerSchema} from "./logger.schema";
import {LoggersController} from "./loggers.controller";
import {LoggerService} from "./logger.service";

@Module({
    imports: [MongooseModule.forFeature([{name: Logger.name, schema: LoggerSchema}])],
    controllers: [LoggersController],
    providers: [LoggerService]
})
export class LoggerModule {
}
