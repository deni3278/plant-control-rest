import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {Document} from "mongoose";
import {Plant} from "../plant/plant.schema";

export type CertificateDocument = Certificate & Document;

type Statistic = { avg: number, min: number, max: number };
const StatisticMongoose = {avg: Number, min: Number, max: Number};

@Schema()
export class Certificate {
    @Prop({required: true, default: Date.now})
    createdAt: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Plant", required: true})
    plant: mongoose.Types.ObjectId;

    @Prop({type: StatisticMongoose, required: true})
    temperature: Statistic;

    @Prop({type: StatisticMongoose, required: true})
    humidity: Statistic;

    @Prop({type: StatisticMongoose, required: true})
    moisture: Statistic;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);