import { Module } from "@nestjs/common";
import { CertificateService } from "./certificate.service";
import { CertificateController } from "./certificate.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Certificate, CertificateSchema } from "./certificate.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: Certificate.name, schema: CertificateSchema }])],
  controllers: [CertificateController],
  providers: [CertificateService]
})
export class CertificateModule {
}
