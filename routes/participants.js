import express from "express";
import participantSchema from "../models/participante.js";



const router = express.Router();

router.get("/participantes", async (req, resp) => {
    try {
        const participantes = await participantSchema.find();
        resp.status(200).json(participantes);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.post("/participantes", async (req, resp) => {
    try {
        const participante = await participantSchema.create(req.body);
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.put("/participantes/:id", async (req, resp) => {
    try {
        const participante = await participantSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.delete("/participantes/:id", async (req, resp) => {
    try {
        const participante = await participantSchema.findOneAndDelete({ id: req.params.id });
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

export default router;
