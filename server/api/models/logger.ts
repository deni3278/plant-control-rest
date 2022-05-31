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
        id: { type: Number, unique: true },
        name: {type: String, required: true},
        isPaired: {type: Boolean, default: false},
    },
    {
        collection: "loggers",
    }
);

schema.plugin(AutoIncrement, { inc_field: "id" });

export const Example = mongoose.model<ILoggerModel>("Logger", schema);
