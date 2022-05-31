import mongoose from "mongoose";
import sequence from "mongoose-sequence";
import {IPairingModel} from "./pairing";
import {IPlantModel} from "./plant";

const AutoIncrement = sequence(mongoose);

export interface ICertificateModel extends mongoose.Document {
    id: number;
    createdAt: Date;
    plant: IPlantModel;
}

const schema = new mongoose.Schema(
    {
        id: {type: Number, unique: true},
        createdAt: {type: Date, required: true},
        plant: {type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true}
    },
    {
        collection: "certificates",
    }
);

schema.plugin(AutoIncrement, {id: "certificate_id", inc_field: "id"});

export const Certificate = mongoose.model<ICertificateModel>("Certificate", schema);
