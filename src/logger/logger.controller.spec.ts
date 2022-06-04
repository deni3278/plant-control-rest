import {Test, TestingModule} from "@nestjs/testing";
import {LoggersController} from "./loggers.controller";

describe("LoggerController", () => {
    let controller: LoggersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LoggersController]
        }).compile();

        controller = module.get<LoggersController>(LoggersController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
