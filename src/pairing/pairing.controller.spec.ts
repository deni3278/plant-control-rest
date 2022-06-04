import { Test, TestingModule } from "@nestjs/testing";
import { PairingsController } from "./pairings.controller";
import { PairingService } from "./pairing.service";

describe("PairingController", () => {
  let controller: PairingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PairingsController],
      providers: [PairingService]
    }).compile();

    controller = module.get<PairingsController>(PairingsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
