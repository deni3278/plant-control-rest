import { Test, TestingModule } from "@nestjs/testing";
import { PairingController } from "./pairing.controller";
import { PairingService } from "./pairing.service";

describe("PairingController", () => {
  let controller: PairingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PairingController],
      providers: [PairingService]
    }).compile();

    controller = module.get<PairingController>(PairingController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
