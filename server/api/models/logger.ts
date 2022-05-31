import mongoose from "mongoose";
import sequence from "mongoose-sequence";


const AutoIncrement = sequence(mongoose);

export interface ILoggerModel extends mongoose.Document {
    id: number;
    name: string;
    isPaired: boolean;
}

const schema = new mongoose.Schema(
    {
        id: {type: Number, unique: true},
        name: {type: String, required: true},
        isPaired: {type: Boolean, default: false, required: true},
    },
    {
        collection: "loggers",
    }
);

schema.plugin(AutoIncrement, {id:"logger_id", inc_field: "id" });

export const Logger = mongoose.model<ILoggerModel>("Logger", schema);
