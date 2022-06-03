import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { LogService } from "./log.service";
import { CreateLogDto } from "./dto/create-log.dto";
import { Log } from "./log.schema";

@Controller("log")
export class LogController {
  constructor(private readonly logService: LogService) {
  }

  @Post()
  create(@Body() createLogDto: CreateLogDto) {
    return this.logService.create(createLogDto as Log);
  }

  @Get()
  findAll() {
    return this.logService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.logService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLogDto: UpdateLogDto) {
  //   return this.logService.update(id, updateLogDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.logService.remove(id);
  }
}
