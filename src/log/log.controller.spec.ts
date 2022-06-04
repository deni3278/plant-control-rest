import {Test, TestingModule} from "@nestjs/testing";
import {LogsController} from "./logs.controller";
import {LogService} from "./log.service";

describe("LogController", () => {
    let controller: LogsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LogsController],
            providers: [LogService]
        }).compile();

        controller = module.get<LogsController>(LogsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
