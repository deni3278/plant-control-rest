import {Test, TestingModule} from "@nestjs/testing";
import {PlantsController} from "./plants.controller";
import {PlantService} from "./plant.service";

describe("PlantController", () => {
    let controller: PlantsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PlantsController],
            providers: [PlantService]
        }).compile();

        controller = module.get<PlantsController>(PlantsController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
