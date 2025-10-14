import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Questions", () => {
    it("GET /questions deve retornar status 200", async () => {
        const res = await request(app).get("/perguntas");
        expect(res.statusCode).toBe(200);
    });
});
