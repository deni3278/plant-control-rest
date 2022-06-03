import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Logger, LoggerDocument } from "../logger/logger.schema";
import { Model } from "mongoose";
import { Pairing, PairingDocument } from "./pairing.schema";
import { BaseService } from "../base.service";
import { Plant, PlantDocument } from "../plant/plant.schema";

@Injectable()
export class PairingService extends BaseService<Pairing> {
  constructor(
    @InjectModel(Pairing.name) private pairingModel: Model<PairingDocument>,
    @InjectModel(Plant.name) private plantModel: Model<PlantDocument>,
    @InjectModel(Logger.name) private loggerModel: Model<LoggerDocument>
  ) {
    super(pairingModel, [{ path: "plant", model: plantModel }, { path: "logger", model: loggerModel }]);
  }
}
