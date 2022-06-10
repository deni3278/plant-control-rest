import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {logger: ["verbose"],cors: true});
    await app.listen(3000);
}


bootstrap();
