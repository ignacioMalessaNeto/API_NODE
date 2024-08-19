import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.get("/users", (req, res) => {
  res.status(200);
  res.json(users);
});
app.post("/users/create", (req, res) => {
    users.push(req.body);
    res.send("OK user create!");
});
app.put("/users/update/:id", (req, res) => {});
app.delete("/users/delete/:id", (req, res) => {});

app.listen(3000)

/* 
  Criar api de usuários 

  - Criar usuário

  - Listar todos os Usuários

  - Editar um Usuário

  - Deletar um Usuário
*/