import mongoose from "mongoose";
import { randomUUID } from "crypto";


const premioSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(),
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
);

export default mongoose.model("Premio", premioSchema, "premios");
