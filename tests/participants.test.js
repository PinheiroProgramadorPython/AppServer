import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Participants", () => {
    it("GET /participantes deve retornar status 200", async () => {
        const res = await request(app).get("/participantes");
        expect(res.statusCode).toBe(200);
    });
});
