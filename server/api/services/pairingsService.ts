import {BaseService} from "./baseService";
import {IPairingModel, Pairing} from "../models/pairing";
import {Plant} from "../models/plant";
import {ILoggerModel, Logger} from "../models/logger";

export class PairingsService extends BaseService<IPairingModel>{


    constructor() {
        super(Pairing, [{path: "plant", model: Plant}, {path: "logger", model: Logger}]);
    }

}