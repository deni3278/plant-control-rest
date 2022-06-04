import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type LoggerDocument = Logger & Document;

@Schema()
export class Logger {
    @Prop({required: true})
    name: string;

    @Prop({required: true, default: false})
    isPaired: boolean;
}

export const LoggerSchema = SchemaFactory.createForClass(Logger);
