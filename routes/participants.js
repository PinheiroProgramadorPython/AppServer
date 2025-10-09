import express from "express";
import participantSchema from "../models/participante.js";



const router = express.Router();

router.get("/participantes", (req, resp) => {
    try {
        const participantes = participantSchema.find();
        resp.status(200).json(participantes);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.post("/participantes", (req, resp) => {
    try {
        const participante = participantSchema.create(req.body);
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.put("/participantes/:id", (req, resp) => {
    try {
        const participante = participantSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.delete("/participantes/:id", (req, resp) => {
    try {
        const participante = participantSchema.findOneAndDelete({ id: req.params.id });
        resp.status(200).json(participante);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

export default router;
