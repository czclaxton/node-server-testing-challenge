const router = require("./usersRouter");
const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("../api/server");

describe("server", () => {
  it("sets the environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("users router", () => {
  //   beforeEach(async () => {
  //     await db("users").truncate();
  //   });

  it("should get users", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should add a user to the users list", () => {
    request(server)
      .post("/")
      .send({ name: "john" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
});
