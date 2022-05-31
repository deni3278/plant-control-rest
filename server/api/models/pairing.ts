import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import {IPlantModel} from "./plant";
import {ILoggerModel} from "./logger";

const AutoIncrement = sequence(mongoose);

export interface IPairingModel extends mongoose.Document {
    id: number;
    name: string;
    createdAt: Date;
    plant: IPlantModel;
    logger: ILoggerModel;
}

const schema = new mongoose.Schema(
    {
        id: {type: Number, unique: true, required: true},
        name: {type: String, required: true},
        createdAt: {type: Date, required: true},
        plant: {type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true},
        logger: {type: mongoose.Schema.Types.ObjectId, ref: 'Logger', required: true}
    },
    {
        collection: "pairings",
    }
);

schema.plugin(AutoIncrement, {id: "pairing_id", inc_field: "id"});

export const Pairing = mongoose.model<IPairingModel>("Pairing", schema);
