const { server } = require("../src/server.js"); // bring in your server for testing (because it is a module)
const supertest = require("supertest"); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server);
const Users = require("../src/auth/models/user.js");
describe("Auth Testing:", () => {
  it("should create a new user on Sign Up", async () => {
    const response = await mockRequest
      .post("/signup")
      .send({ username: "User1", password: "coolpassword" });
    expect(response.status).toBe(201);
  });
});
