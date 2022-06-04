import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import {BaseService} from "../base.service";
import {Image} from "./image.schema";
import {InjectModel} from "@nestjs/mongoose";
import {Plant, PlantDocument} from "../plant/plant.schema";
import {Document, Model} from "mongoose";

@Injectable()
export class ImageService extends BaseService<Image>{
  constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {
    super(imageModel);
  }

  async findOneByPlantId(imageId: string): Promise<Image> {
    return this.imageModel.findOne({plantId: imageId});
  }
}
