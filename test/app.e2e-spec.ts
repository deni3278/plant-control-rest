import {Test, TestingModule} from "@nestjs/testing";
import {INestApplication} from "@nestjs/common";
import * as request from "supertest";
import {AppModule} from "../src/app.module";
import mongoose from "mongoose";
import {LoggerDocument} from "../src/logger/logger.schema";

describe("AppController (e2e)", () => {
    jest.setTimeout(30000);
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/ (GET)", async () => {
        return request(app.getHttpServer())
            .get("/loggers", (err, res) => {
                const data: LoggerDocument[] = res.body;
                expect(data[0].id).toBeDefined();
                expect(res.status).toBe(200);
            })


    });

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })
});
