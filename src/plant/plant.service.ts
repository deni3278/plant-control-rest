import {Inject, Injectable} from "@nestjs/common";
import {BaseService} from "../base.service";
import {Plant, PlantDocument} from "./plant.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ImageService} from "../image/image.service";
import {CreatePlantDto} from "./dto/create-plant.dto";

@Injectable()
export class PlantService extends BaseService<Plant> {
    constructor(@InjectModel(Plant.name) private plantModel: Model<PlantDocument>, @Inject(ImageService) private imageService: ImageService) {
        super(plantModel);
    }

    async create(createPlantDto: CreatePlantDto): Promise<PlantDocument> {
        const savedPlant = await this.plantModel.create(createPlantDto);
        if (createPlantDto.image) {
            await this.imageService.create({plantId: savedPlant._id, image: createPlantDto.image});
        }
        return savedPlant;
    }

}
