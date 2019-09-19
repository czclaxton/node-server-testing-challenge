const router = require("express").Router();

const Users = require("./usersModel.js");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error getting users list" });
    });
});

router.post("/", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "error deleting user" });
    });
});

module.exports = router;
