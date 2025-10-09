import mongoose from "mongoose";
import { randomUUID } from "crypto";


const ruleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => randomUUID()
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
        versionKey: false
    }
);

export default mongoose.model("Regra", ruleSchema, "regras");
