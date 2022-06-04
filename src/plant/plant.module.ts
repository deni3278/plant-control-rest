import { Module } from "@nestjs/common";
import { PlantService } from "./plant.service";
import { PlantsController } from "./plants.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Plant, PlantSchema } from "./plant.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Plant.name, schema: PlantSchema }])],
  controllers: [PlantsController],
  providers: [PlantService]
})
export class PlantModule {
}
