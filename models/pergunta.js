import mongoose from "mongoose";
import { randomUUID } from "crypto";


const questionSchema = new mongoose.Schema({
    id: {
        type: String,
        rerequired: true,
        unique: true,
        default: () => randomUUID()
    },
    pergunta: {
        type: String,
        rerequired: true,
        unique: true
    },
    resposta: {
        type: String,
        rerequired: true,
        unique: true,
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.model("Pergunta", questionSchema, "perguntas");
