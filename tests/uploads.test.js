import request from "supertest";
import app from "../app/app.js";

describe("Rotas de Uploads", () => {
    it("POST /uploads deve retornar status 200 ou 400", async () => {
        const res = await request(app)
            .post("/premios/image")
            .send({ arquivo: "teste.png" });
        expect([200, 400]).toContain(res.statusCode);
    });
});
