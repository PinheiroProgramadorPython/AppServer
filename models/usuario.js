import mongoose from "mongoose";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: () => randomUUID(),
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    whatsapp: {
        type: Number,
        required: true,
        unique: true
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    senha: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { versionKey: false });

userSchema.pre("save", async function (next) {
    if (!this.isModified("senha")) {
        return next()
    } else {
        this.senha = await bcrypt.hash(this.senha, 10);
        next()
    }
});

userSchema.methods.validarSenha = async function (senhaDigitada) {
    return await bcrypt.compare(senhaDigitada, this.senha)
}

export default mongoose.model("Usuario", userSchema, "usuarios");
