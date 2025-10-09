import mongoose from "mongoose";
import { randomUUID } from "crypto";

const winnerSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(),
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    premio: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: () => {
            const start = new Date(2024, 0, 1).getTime();
            const end = new Date(2024, 11, 31).getTime();
            return new Date(start + Math.random() * (end - start));
        },
        required: true
    }
},
    {
        versionKey: false
    }
);

export default mongoose.model("Ganhador", winnerSchema, "ganhadores"); 
