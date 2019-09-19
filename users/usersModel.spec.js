const Users = require("./usersModel");

const db = require("../data/dbConfig");

describe("users model", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("insert()", () => {
    it("should insert a new user", async () => {
      const userData = { name: "joe" };
      const user = await Users.insert(userData);
      const users = await db("users");
      expect(users.length).toBe(1);
      expect(users[0].name).toBe("joe");
    });
  });

  describe("remove()", () => {
    it("should remove a user", async () => {
      const userData = { name: "kayla" };
      const userId = await userData.length;
      const users = await db("users");
      expect(users.length).toBe(0);
    });
  });
});
