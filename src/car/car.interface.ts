import { Document } from 'mongoose';

export interface ICar extends Document {
    readonly _id: number;
    readonly brand: string;
    readonly color: string;
    readonly _model: string;
}