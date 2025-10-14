import express from "express";
import premioSchema from "../models/premio.js";


const router = express.Router();

router.get("/premios", async (req, resp) => {
    try {
        const premios = await premioSchema.find().select("-__v");
        resp.json(premios).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});


router.post("/premios", async (req, resp) => {
    try {
        const premio = await premioSchema.create(req.body);
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.put("/premios/:id", async (req, resp) => {
    try {
        const premio = await premioSchema.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/premios/:id", async (req, resp) => {
    try {
        const premio = await premioSchema.findOneAndDelete({ id: req.params.id });
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
