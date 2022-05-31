import mongoose from "mongoose";
import sequence from "mongoose-sequence";

const AutoIncrement = sequence(mongoose);

export interface IPlantModel extends mongoose.Document {
    id: number;
    name: string;
    createdAt: Date;
    image: Buffer;
}

const schema = new mongoose.Schema(
    {
        id: { type: Number, unique: true, required: true },
        name: { type: String, required: true },
        createdAt: { type: Date, required: true},
        image: { type: Buffer }
    },
    {
        collection: "examples",
    }
);

schema.plugin(AutoIncrement, { inc_field: "id" });

export const Plant = mongoose.model<IPlantModel>("Plant", schema);
