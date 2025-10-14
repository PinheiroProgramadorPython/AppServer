import mongoose from "mongoose";

// Fecha o banco de dados após todos os testes
afterAll(async () => {
    await mongoose.connection.close();
});
