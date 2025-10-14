import express from "express";
import routerWinners from "../routes/winners.js";
import routerStores from "../routes/stores.js";
import routerAwards from "../routes/awards.js";
import routerQuestion from "../routes/questions.js";
import routerRules from "../routes/rules.js";
import routerParticipant from "../routes/participants.js";
import routeUpload from "../routes/uploads.js";
import routerUsers from "../routes/users.js";
import dotenv from "dotenv";
import cors from "cors";
import "../dataBase/mongoDB.js";


dotenv.config();

const app = express()

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.use(routerWinners);
app.use(routerStores);
app.use(routerAwards);
app.use(routerQuestion);
app.use(routerRules);
app.use(routerParticipant);
app.use(routeUpload);
app.use(routerUsers);

export default app;
