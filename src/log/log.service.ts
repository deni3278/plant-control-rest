import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Log, LogDocument } from "./log.schema";
import { BaseService } from "../base.service";
import { Pairing, PairingDocument } from "../pairing/pairing.schema";

@Injectable()
export class LogService extends BaseService<Log> {
  constructor(
    @InjectModel(Log.name) private logModel: Model<LogDocument>,
    @InjectModel(Pairing.name) private pairingModel: Model<PairingDocument>
  ) {
    super(logModel, [{ path: "pairing", model: pairingModel }]);
  }
}
