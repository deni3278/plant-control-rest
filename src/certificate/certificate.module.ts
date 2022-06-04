import {Module} from "@nestjs/common";
import {CertificateService} from "./certificate.service";
import {CertificatesController} from "./certificate.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Certificate, CertificateSchema} from "./certificate.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Certificate.name, schema: CertificateSchema}])],
    controllers: [CertificatesController],
    providers: [CertificateService]
})
export class CertificateModule {
}
