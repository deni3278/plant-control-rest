import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type PlantDocument = Plant & Document;

@Schema()
export class Plant {
    @Prop({required: true})
    name: string;

    @Prop({required: true, default: Date.now})
    createdAt: Date;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);

