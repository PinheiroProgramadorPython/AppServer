import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Awards", () => {
    it("GET /awards deve retornar status 200", async () => {
        const res = await request(app).get("/premios");
        expect(res.statusCode).toBe(200);
    });
});
