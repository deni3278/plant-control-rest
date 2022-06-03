import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PlantDocument = Plant & Document;

@Schema()
export class Plant {
  @Prop()
  name: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  image?: Buffer;
}

export const PlantSchema = SchemaFactory.createForClass(Plant);

