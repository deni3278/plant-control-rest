import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Log, LogDocument} from "./log.schema";
import {BaseService} from "../base.service";
import {Pairing, PairingDocument} from "../pairing/pairing.schema";
import {Plant, PlantDocument} from "../plant/plant.schema";

@Injectable()
export class LogService extends BaseService<Log> {
    constructor(
        @InjectModel(Log.name) private logModel: Model<LogDocument>,
        @InjectModel(Pairing.name) private pairingModel: Model<PairingDocument>,
        @InjectModel(Plant.name) private plantModel: Model<PlantDocument>
    ) {
        super(logModel, [{path: "pairing", model: pairingModel}]);
    }

    async findByPlant(id: string): Promise<LogDocument[]> {
        const plant: PlantDocument = await this.plantModel.findById(id);
        const pairings: PairingDocument[] = await this.pairingModel.find({plant: plant});

        return this.logModel.find({pairing: {$in: pairings}});
    }
}
