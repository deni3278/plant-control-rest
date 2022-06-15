import {Body, Controller, Delete, Get, NotFoundException, Param, Post} from "@nestjs/common";
import {LogService} from "./log.service";
import {CreateLogDto} from "./dto/create-log.dto";
import {Log} from "./log.schema";

@Controller("logs")
export class LogsController {
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

    @Get("/plants/:id")
    async findByPlantId(@Param("id") id: string) {
        const log = await this.logService.findByPlant(id);

        if (log === null) throw new NotFoundException();

        return log;
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
