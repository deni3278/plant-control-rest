import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {Document} from "mongoose";
import {Plant} from "../plant/plant.schema";
import {Logger} from "../logger/logger.schema";

export type PairingDocument = Pairing & Document;

@Schema()
export class Pairing {
    @Prop({required: true})
    name: string;

    @Prop({required: true, default: Date.now})
    createdAt: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Plant", required: true})
    plant: Plant;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Logger", required: true})
    logger: Logger;

}

export const PairingSchema = SchemaFactory.createForClass(Pairing);

