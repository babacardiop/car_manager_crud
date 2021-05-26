import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema(
    {
        _id: Number,
        brand: String,
        color: String,
        model: String
    }
);