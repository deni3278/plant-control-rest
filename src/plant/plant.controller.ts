import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { PlantService } from "./plant.service";
import { CreatePlantDto } from "./dto/create-plant.dto";
import { UpdatePlantDto } from "./dto/update-plant.dto";
import { Plant } from "./plant.schema";

@Controller("plant")
export class PlantController {
  constructor(private readonly plantService: PlantService) {
  }

  @Post()
  create(@Body() createPlantDto: CreatePlantDto) {
    return this.plantService.create(<Plant>createPlantDto);
  }

  @Get()
  findAll() {
    return this.plantService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.plantService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePlantDto: UpdatePlantDto) {
    return this.plantService.update(id, <Plant>updatePlantDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.plantService.remove(id);
  }
}
