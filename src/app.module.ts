import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {LoggerModule} from "./logger/logger.module";
import {PlantModule} from "./plant/plant.module";
import {PairingModule} from "./pairing/pairing.module";
import {LogModule} from "./log/log.module";
import {CertificateModule} from "./certificate/certificate.module";
import {ImageModule} from './image/image.module';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.CONNECTION_STRING || "mongodb://localhost/plantDB"),
        LoggerModule, PlantModule, PairingModule, LogModule, CertificateModule, ImageModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {
}
