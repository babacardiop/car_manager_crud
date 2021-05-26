import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema(
    {
        id: Number,
        brand: String,
        color: String,
        car_model: String
    }
);