import mongoose from "mongoose";
import { randomUUID } from "crypto";


const participantSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => randomUUID()
    },
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: Number,
        required: true,
    },
    cupom_fiscal: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: Number,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { versionKey: false });

export default mongoose.model("Participante", participantSchema, "participantes");
