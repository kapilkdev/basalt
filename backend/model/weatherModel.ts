// src/user.model.ts
import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    location: string;
    flag: string;
    whetherImage: string;
    temperature: string;
    windPerHour: string;
    windDir:string;
    lastUpdated: string;
    humidity: string;
    cloud: string;
}

const whetherSchema = new Schema<IUser>({
    location: { type: String, required: true },
    flag: { type: String},
    whetherImage: { type: String},
    temperature: { type: String },
    windPerHour: { type: String},
    lastUpdated: { type: String},
    humidity: { type: String },
    cloud: { type: String },
    windDir: { type: String },

});

const WhetherModel = model<IUser>('whetherSchema', whetherSchema);

export default WhetherModel;