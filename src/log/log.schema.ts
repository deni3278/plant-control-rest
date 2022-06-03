import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Pairing } from "../pairing/pairing.schema";

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop({ default: Date.now })
  time: Date;

  @Prop({ required: true })
  temperature: number;

  @Prop({ required: true })
  humidity: number;

  @Prop({ required: true })
  moisture: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Pairing", required: true })
  pairing: Pairing;

}

export const LogSchema = SchemaFactory.createForClass(Log);

