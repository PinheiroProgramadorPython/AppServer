import express from "express";
import routerWinners from "./routes/winners.js";
import routerStores from "./routes/stores.js";
import routerAwards from "./routes/awards.js";
import routerQuestion from "./routes/questions.js";
import routerRules from "./routes/rules.js";
import routerParticipant from "./routes/participants.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


dotenv.config();

const connectMongoDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB conectado com Sucesso")
}

connectMongoDB();

const app = express()

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ["Content-Type"]
}));

app.use("/uploads", express.static("public/uploads"));

app.use(express.json());
app.use(routerWinners);
app.use(routerStores);
app.use(routerAwards);
app.use(routerQuestion);
app.use(routerRules);
app.use(routerParticipant);

app.listen(3000, () => { console.log("API rodando com Sucesso!") });

export default app;
