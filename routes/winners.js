import express from "express";
import winnerSchema from "../models/ganhador.js";



const router = express.Router();

router.get("/ganhadores", async (req, resp) => {
    try {
        const ganhadores = await winnerSchema.find().select("-__v");
        resp.json(ganhadores).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/ganhadores", async (req, resp) => {
    try {
        const ganhador = await winnerSchema.create(req.body);
        resp.json(ganhador).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.put("/ganhadores/:id", async (req, resp) => {
    try {
        const ganhador = await winnerSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.json(ganhador).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/ganhadores/:id", async (req, resp) => {
    try {
        const ganhador = await winnerSchema.findOneAndDelete({ id: req.params.id });
        resp.json(ganhador).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
