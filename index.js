require("dotenv").config(); // importa o .env para
const express = require("express");
const sequelize = require("./database/db"); // importa a função que se conecta ao banco

const { name } = require("ejs");
const app = express();

// define a porta do .env, mas ainda usa a reserva em caso de indisponibilidade.
const port = process.env.PORT || 3001;

app.use(express.json());

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Banco de dados sincronizado e tabelas criadas com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }); // conexão ao banco de dados

app.get("/", async (req, res) => {
 
  res.send("Ola mundo");
});

app.listen(port, () =>
  console.log(`O servidor esta rodando em "localhost:${port}!"`),
);
