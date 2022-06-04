import {Injectable} from "@nestjs/common";
import {BaseService} from "../base.service";
import {Plant, PlantDocument} from "./plant.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class PlantService extends BaseService<Plant> {
    constructor(@InjectModel(Plant.name) private plantModel: Model<PlantDocument>) {
        super(plantModel);
    }

}
