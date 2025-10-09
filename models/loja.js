import mongoose from "mongoose";
import { randomUUID } from "crypto";
import { cnpj } from "cpf-cnpj-validator";

const storeSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(), // gera automático
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cnpj: {
        type: String,
        default: () => cnpj.generate(),
        required: true,
        unique: true
    },
    estado: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    }
},
    {
        versionKey: false
    }
);

export default mongoose.model("Loja", storeSchema, "lojas"); 
