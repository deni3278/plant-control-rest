import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {Document, ObjectId} from "mongoose";

export type ImageDocument = Image & Document;

@Schema()
export class Image {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "Plant", required: true})
    plantId: string;

    @Prop()
    image?: Buffer;
}

export const ImageSchema = SchemaFactory.createForClass(Image);

