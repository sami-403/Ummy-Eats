require("dotenv").config(); // importa o .env para
const express = require("express");
const app = express();

// define a porta do .env, mas ainda usa a reserva em caso de indisponibilidade.
const port = process.env.PORT || 3001;

app.use(express.json());

app.get("/", async (req, res) => {
  const music = await Music.create({
    name: "Meus Olhos",
    author: "Tom Jobim",
    linkImage: "algumacoisa",
    linkMusic: "algumacoisa2",
  });
  res.send("Ola mundo");
});

app.listen(port, () =>
  console.log(`O servidor esta rodando em "localhost:${port}!"`),
);
