import {BaseService} from "./base_service";
import {ILoggerModel, Logger} from "../models/logger";
import {Model} from "mongoose";

export class LoggersService extends BaseService<ILoggerModel> {
    constructor() {
        super(Logger);
    }

}