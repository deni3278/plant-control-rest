import {BaseService} from "./baseService";
import {ILogModel, Log} from "../models/log";
import {Pairing} from "../models/pairing";

export class LogsService extends BaseService<ILogModel>{
    constructor() {
        super(Log, [{path: "pairing", model: Pairing}]);
    }
}