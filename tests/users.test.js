import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Users", () => {
    it("GET /users deve retornar status 200", async () => {
        const res = await request(app).get("/usuarios");
        expect(res.statusCode).toBe(200);
    });
});
