# 🧩 Polgo Project - Backend

Backend da aplicação **Polgo Project**, desenvolvido em **Node.js**, **Express**, **MongoDB (Mongoose)** e **Cloudinary** para upload de imagens.  
O backend fornece APIs REST completas para gerenciamento de usuários, ganhadores, lojas participantes, prêmios e perguntas (FAQ), além de suporte a autenticação e upload de imagens.


## 🚀 Tecnologias Utilizadas

- **Node.js** e **Express** → Servidor e rotas REST  
- **MongoDB + Mongoose** → Banco de dados e modelagem  
- **Cloudinary** → Armazenamento de imagens  
- **dotenv** → Configuração de variáveis de ambiente  
- **UUID** → Geração de identificadores únicos  
- **Jest + Supertest** → Testes automatizados das rotas  
- **CORS** → Integração com o frontend hospedado na Netlify  

## 📂 Estrutura do Projeto

AppServer/
│
├── models/ # Modelos Mongoose
│ ├── ganhador.js
│ ├── loja.js
│ ├── premio.js
│ ├── pergunta.js
│ └── usuario.js
│
├── routes/ # Rotas principais da API
│ ├── ganhadoresRoutes.js
│ ├── lojasRoutes.js
│ ├── premiosRoutes.js
│ ├── perguntasRoutes.js
│ └── usuariosRoutes.js
│
├── dataBase/
│ └── mongoDB.js # Conexão com o banco de dados
│
├── tests/ # Testes de rotas (GET)
│ ├── winners.test.js
│ ├── stores.test.js
│ └── questions.test.js
│
├── uploads/ # Pasta temporária para imagens
│
├── app.js # Configuração principal do servidor
├── jest.config.js # Configuração do Jest
├── .env # Variáveis de ambiente
└── package.json


## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=8080
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/polgo
MONGO_URI_TEST=mongodb+srv://usuario:senha@cluster.mongodb.net/polgo_test
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=sua_api_secret
TOKEN_ADMIN=token_secreto_para_criar_admin

## Instalar dependências:
npm install

## Executar o servidor local:
npm start

## A API estará disponível em:
http://localhost:8080

## Executar testes:
npm test
