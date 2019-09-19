const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  insert,
  remove
};

function find() {
  return db("users").select("id", "name");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function insert(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
