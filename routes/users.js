import express from "express";
import userSchema from "../models/usuario.js";


const router = express.Router();

router.get("/usuarios", async (req, resp) => {
    try {
        const usuarios = await userSchema.find();
        resp.status(200).json(usuarios);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/usuarios", async (req, resp) => {
    try {
        const usuario = await userSchema.create(req.body);
        resp.status(200).json(usuario);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
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
