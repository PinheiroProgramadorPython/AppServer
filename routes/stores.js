import express from "express";
import storeSchema from "../models/loja.js";



const router = express.Router();

router.get("/lojas", async (req, resp) => {
    try {
        const lojas = await storeSchema.find().select("-__v");
        resp.json(lojas).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/lojas", async (req, resp) => {
    try {
        const loja = await storeSchema.create(req.body);
        resp.json(loja).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.put("/lojas/:id", async (req, resp) => {
    try {
        const loja = await storeSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.json(loja).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/lojas/:id", async (req, resp) => {
    try {
        const loja = await storeSchema.findOneAndDelete({ id: req.params.id });
        resp.json(loja).status(200);
    } catch {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
