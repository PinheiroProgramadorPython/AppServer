import express from "express";
import questionSchema from "../models/pergunta.js";


const router = express.Router();

router.get("/perguntas", async (req, resp) => {
    try {
        const perguntas = await questionSchema.find();
        resp.json(perguntas).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/perguntas", async (req, resp) => {
    try {
        const pergunta = await questionSchema.create(req.body);
        resp.json(pergunta).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }

});

router.put("/perguntas/:id", async (req, resp) => {
    try {
        const pergunta = await questionSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.json(pergunta).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/perguntas/:id", async (req, resp) => {
    try {
        const pergunta = await questionSchema.findOneAndDelete({ id: req.params.id });
        resp.json(pergunta).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
