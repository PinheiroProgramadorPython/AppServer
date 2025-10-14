import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Stores", () => {
    it("GET /stores deve retornar status 200", async () => {
        const res = await request(app).get("/lojas");
        expect(res.statusCode).toBe(200);
    });
});
