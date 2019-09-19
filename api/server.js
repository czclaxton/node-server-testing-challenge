const express = require("express");
const Users = require("../users/usersModel");

const server = express();

const usersRouter = require("../users/usersRouter");

server.use(express.json());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("server is up");
});

server.post("/", (req, res) => {
  user = req.body;
  Users.insert(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error adding user" });
    });
});

module.exports = server;
