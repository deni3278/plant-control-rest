import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Logger, LoggerDocument } from "./logger.schema";
import { Model } from "mongoose";
import { BaseService } from "../base.service";

@Injectable()
export class LoggerService extends BaseService<Logger> {

  constructor(@InjectModel(Logger.name) private loggerModel: Model<LoggerDocument>) {
    super(loggerModel);
  }

}
