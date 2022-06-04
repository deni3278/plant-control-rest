import {Module} from "@nestjs/common";
import {PlantService} from "./plant.service";
import {PlantsController} from "./plants.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Plant, PlantSchema} from "./plant.schema";
import {ImageService} from "../image/image.service";
import {ImageSchema} from "../image/image.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Plant.name, schema: PlantSchema}, {name: "Image", schema: ImageSchema}])],
    controllers: [PlantsController],
    providers: [PlantService, ImageService]
})
export class PlantModule {
}
