import express from "express";

import cors from 'cors';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());
app.get("/users", async (req, res) => {
  let users = [];
  if (req.query) {
    users = await prisma.user.findMany({
      where:{
        name: req.query.name,
        age: req.query.age,
        email: req.query.email,
      }
    });
  } else {
    const users = await prisma.user.findMany();
  }
  res.status(200).json(users);

});

app.post("/users/create", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(200).json(req.body);
});

app.put("/users/update/:id", async (req, res) => {
  await prisma.user.update({
    where: { id: req.params.id },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(200).json(req.body);
});
app.delete("/users/delete/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: req.params.id },
  });
  res.status(200).json({ message: "User deleted successfully" });
});

app.listen(3000);
