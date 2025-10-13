import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userSchema from "../models/usuario.js";



const TOKEN_ADMIN = process.env.TOKEN_ADMIN;


const router = express.Router();

router.get("/usuarios", async (req, resp) => {
    try {
        const usuarios = await userSchema.find();
        resp.status(200).json(usuarios);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.get("/usuarios/:id", async (req, resp) => {
    try {
        const usuario = await userSchema.findOne({ id: req.params.id });
        resp.status(200).json(usuario);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/usuarios/criarconta", async (req, resp) => {
    try {
        const { name, lastname, email, whatsapp, senha, tokenAdmin } = req.body;

        const isAdmin = tokenAdmin === TOKEN_ADMIN;

        const usuario = await userSchema.create({
            name, lastname, email, whatsapp, senha, admin: isAdmin
        });
        resp.status(200).json(usuario);

    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/usuarios/login", async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const usuario = await userSchema.findOne({ email });
        if (!usuario) { return resp.status(404).json({ message: "Usuario não foi Encontrado" }); }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if (!senhaCorreta) { return resp.status(404).json({ message: "Senha esta Incorreta" }); }

        const token = jwt.sign(
            { id: usuario.id, admin: usuario.admin },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        resp.status(200).json({ token, usuario: { name: usuario.name, admin: usuario.admin } });
    } catch (error) {
        resp.status(500).json({ error: error, message: "Erro Interno do Servidor" });
    }
});

router.put("/usuarios/:id", async (req, resp) => {
    try {
        const usuario = await userSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.status(200).json(usuario);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/usuarios/:id", async (req, resp) => {
    try {
        const usuario = await userSchema.findOneAndDelete({ id: req.params.id });
        resp.status(200).json(usuario);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
