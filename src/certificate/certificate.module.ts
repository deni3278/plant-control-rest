import {Module} from "@nestjs/common";
import {CertificateService} from "./certificate.service";
import {CertificatesController} from "./certificate.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Certificate, CertificateSchema} from "./certificate.schema";
import {Plant, PlantSchema} from "../plant/plant.schema";
import {Pairing, PairingSchema} from "../pairing/pairing.schema";
import {Log, LogSchema} from "../log/log.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Certificate.name, schema: CertificateSchema},
        {name: Plant.name, schema: PlantSchema},
        {name: Pairing.name, schema: PairingSchema},
        {name: Log.name, schema: LogSchema}])],
    controllers: [CertificatesController],
    providers: [CertificateService]
})
export class CertificateModule {
}
