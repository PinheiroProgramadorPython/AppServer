import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Rules", () => {
    it("GET /rules deve retornar status 200", async () => {
        const res = await request(app).get("/regras");
        expect(res.statusCode).toBe(200);
    });
});
