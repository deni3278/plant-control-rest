import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, {Document} from "mongoose";
import {Plant} from "../plant/plant.schema";

export type CertificateDocument = Certificate & Document;

@Schema()
export class Certificate {

    @Prop({required: true, default: Date.now})
    createdAt: Date;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Plant", required: true})
    plant: mongoose.Types.ObjectId;

}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);

