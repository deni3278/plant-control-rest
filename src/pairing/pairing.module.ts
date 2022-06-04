import {Module} from "@nestjs/common";
import {PairingService} from "./pairing.service";
import {PairingsController} from "./pairings.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Logger, LoggerSchema} from "../logger/logger.schema";
import {Pairing, PairingSchema} from "./pairing.schema";
import {Plant, PlantSchema} from "../plant/plant.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Pairing.name, schema: PairingSchema}]),
        MongooseModule.forFeature([{name: Logger.name, schema: LoggerSchema}]),
        MongooseModule.forFeature([{name: Plant.name, schema: PlantSchema}])
    ],
    controllers: [PairingsController],
    providers: [PairingService]
})
export class PairingModule {
}
