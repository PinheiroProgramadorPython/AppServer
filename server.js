import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => { console.log(`API rodando com Sucesso! na Porta: ${PORT}`) });
