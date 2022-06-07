import {Injectable} from "@nestjs/common";
import {BaseService} from "../base.service";
import {Certificate, CertificateDocument} from "./certificate.schema";
import {InjectModel} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {Model} from "mongoose";
import {Plant, PlantDocument} from "../plant/plant.schema";
import {Pairing, PairingDocument} from "../pairing/pairing.schema";
import {Log, LogDocument} from "../log/log.schema";

@Injectable()
export class CertificateService extends BaseService<Certificate> {
    constructor(@InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>,
                @InjectModel(Plant.name) private plantModel: Model<PlantDocument>,
                @InjectModel(Pairing.name) private pairingModel: Model<PairingDocument>,
                @InjectModel(Log.name) private logModel: Model<LogDocument>) {
        super(certificateModel,[{path: "plant", model: plantModel }]);
    }

    async generate(plantId: string): Promise<Certificate> {
        const plant: PlantDocument = await this.plantModel.findById(plantId);
        const pairings: PairingDocument[] = await this.pairingModel.find({plant: plant});
        const pairingIds = pairings.map(pairing => new mongoose.Types.ObjectId(pairing._id));
        const statistics = (await this.logModel.aggregate([
            {
                $match: {
                    pairing: {
                        $in: pairingIds
                    }
                }
            }, {
                $group: {
                    _id: plant._id,
                    avgTemp: {
                        $avg: '$temperature'
                    },
                    avgHumidity: {
                        $avg: '$humidity'
                    },
                    avgMoisture: {
                        $avg: '$moisture'
                    },
                    minTemp: {
                        $min: '$temperature'
                    },
                    minHumidity: {
                        $min: '$humidity'
                    },
                    minMoisture: {
                        $min: '$moisture'
                    },
                    maxTemp: {
                        $max: '$temperature'
                    },
                    maxHumidity: {
                        $max: '$humidity'
                    },
                    maxMoisture: {
                        $max: '$moisture'
                    }
                }
            }
        ]).exec())[0]

        return this.certificateModel.create({
            plant: plant,
            temperature: {
                avg: statistics.avgTemp,
                min: statistics.minTemp,
                max: statistics.maxTemp
            },
            humidity: {
                avg: statistics.avgHumidity,
                min: statistics.minHumidity,
                max: statistics.maxHumidity
            },
            moisture: {
                avg: statistics.avgMoisture,
                min: statistics.minMoisture,
                max: statistics.maxMoisture
            }
        });
    }
}