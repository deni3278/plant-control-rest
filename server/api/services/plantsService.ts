import {BaseService} from "./baseService";
import {IPlantModel, Plant} from "../models/plant";

export class PlantsService extends BaseService<IPlantModel>{
    constructor() {
        super(Plant);
    }

}