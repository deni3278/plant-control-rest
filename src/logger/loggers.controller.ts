import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { CreateLoggerDto } from "./logger.dto";

@Controller("loggers")
export class LoggersController {

  constructor(private loggerService: LoggerService) {
  }


  @Get()
  async getLogs() {
    return await this.loggerService.findAll();
  }

  @Post()
  async createLog(@Body() logger: CreateLoggerDto) {

    return await this.loggerService.create({
      isPaired: false,
      name: logger.name
    });
  }

}
