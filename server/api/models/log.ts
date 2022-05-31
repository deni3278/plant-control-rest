import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import {IPairingModel} from "./pairing";

const AutoIncrement = sequence(mongoose);

export interface ILogModel extends mongoose.Document {
    id: number;
    time: Date;
    temperature: number;
    humidity: number;
    moisture: number;
    pairing: IPairingModel;
}

const schema = new mongoose.Schema(
    {
        id: {type: Number, unique: true},
        time: {type: Date, required: true},
        temperature: {type: Number, required: true},
        humidity: {type: Number, required: true},
        moisture: {type: Number, required: true},
        pairing: {type: mongoose.Schema.Types.ObjectId, ref: 'Pairing', required: true}
    },
    {
        collection: "logs",
    }
);

schema.plugin(AutoIncrement, {id: "log_id", inc_field: "id"});

export const Log = mongoose.model<ILogModel>("Log", schema);
