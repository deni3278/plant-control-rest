import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose from "mongoose";
import {Plant} from "../plant/plant.schema";

@Schema()
export class Image {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Plant", required: true})
    plant: Plant;

    @Prop()
    image?: Buffer;
}

export const ImageSchema = SchemaFactory.createForClass(Image);

