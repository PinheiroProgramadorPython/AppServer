import express from "express";
import ruleSchema from "../models/regra.js";


const router = express.Router();

router.get("/regras", async (req, resp) => {
    try {
        const regras = await ruleSchema.find();
        resp.status(200).json(regras);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.post("/regras", async (req, resp) => {
    try {
        const regra = await ruleSchema.create(req.body);
        resp.status(200).json(regra);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.put("/regras/:id", async (req, resp) => {
    try {
        const regra = await ruleSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.status(200).json(regra);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

router.delete("/regras/:id", async (req, resp) => {
    try {
        const regra = await ruleSchema.findOneAndDelete({ id: req.params.id });
        resp.status(200).json(regra);
    } catch (error) {
        resp.status(400).json({ error: error, message: "Request Failure" });
    }
});

export default router;
