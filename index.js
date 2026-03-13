import "dotenv/config";
import express from "express";
// Importamos as duas instâncias usando chaves { }
import sequelize from "./database/db.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

// Função para sincronizar os dois bancos ao mesmo tempo
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Banco de dados unificado sincronizado!"))
  .catch(err => console.error("❌ Erro ao sincronizar:", err));

app.use(express.static('public'));
app.set('view', 'ejs');

app.get("/", (req, res) => {
  res.send("ola mundo")
});

app.listen(port, () =>
  console.log(`🚀 O servidor esta rodando em "http://localhost:${port}"`),
);
