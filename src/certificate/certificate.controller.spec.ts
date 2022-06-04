import {Test, TestingModule} from "@nestjs/testing";
import {CertificatesController} from "./certificate.controller";
import {CertificateService} from "./certificate.service";

describe("CertificateController", () => {
    let controller: CertificatesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CertificatesController],
            providers: [CertificateService]
        }).compile();

        controller = module.get<CertificatesController>(CertificatesController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
