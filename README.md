# Aprendendo a Criar uma API

Repositório de estudos focado em construir uma API REST do zero com Node.js. O projeto cobre desde a configuração do servidor até a integração com banco de dados via Prisma + MongoDB.

> 🔗 Esta API serve de backend para o projeto **[Aprendendo Vite + React](https://github.com/balzaNeli/Aprendendo-Vite-React)**.

---

## Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Como rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) (v18+) e uma instância do MongoDB acessível (local ou via [MongoDB Atlas](https://www.mongodb.com/atlas)).

```bash
# Clone o repositório
git clone https://github.com/balzaNeli/Aprendendo-A-Criar-API.git

# Entre na pasta
cd Aprendendo-A-Criar-API

# Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto com a sua string de conexão:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco"
```

```bash
# Gere o Prisma Client
npm run build

# Suba o servidor
npm start
```

O servidor sobe em `http://localhost:3000` por padrão.

### Comandos disponíveis

| Comando | O que faz |
|---|---|
| `npm start` | Sobe o servidor com `node server.js` |
| `npm run build` | Roda `prisma generate` para gerar o client |

---

## 📁 Estrutura do Projeto

```text
├── prisma/              # Schema e migrações do Prisma
├── .gitignore
├── prisma.config.ts     # Configurações do Prisma
├── server.js            # Ponto de entrada — define rotas e inicializa o Express
├── package.json         # Dependências e scripts
└── package-lock.json
```

---

## 🔗 Repositórios

| Projeto | Link |
|---|---|
| Backend (este) | [Aprendendo-A-Criar-API](https://github.com/balzaNeli/Aprendendo-A-Criar-API) |
| Frontend | [Aprendendo-Vite-React](https://github.com/balzaNeli/Aprendendo-Vite-React) |