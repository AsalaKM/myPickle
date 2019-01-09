const request = require("supertest")
const app = require("../../app")

test("Test with intial is Ok", async () => {
  const ExpecData = {
    title: "Express",
  }
  const response = await request(app)
    .get("/")
    .set("Accept", "application/json")
  expect(response.status).toBe(200)
  expect(response.body).toBeDefined()
})
