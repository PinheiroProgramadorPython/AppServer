import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Winners", () => {
    it("GET /winners deve retornar status 200", async () => {
        const res = await request(app).get("/ganhadores");
        expect(res.statusCode).toBe(200);
    });
});
