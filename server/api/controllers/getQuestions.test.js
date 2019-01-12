const mongoose = require("mongoose")
const request = require("supertest")
const Profile = require("../../database/models/Profile")

const app = require("../../app")

// get database connection
const dbConnection = require("../../database/db_connection")

// build dummy data
const buildDb = require("../../database/dummy_data_build")

// login function needed
const loginUser = require("../../database/queries/loginUser")

describe("Test for getQuestions controller", () => {
  afterAll(async () => {
    // Clear and rebuild the dummy data
    await buildDb()

    // Close the connection
    await mongoose.connection.close()
  })

  beforeAll(async () => {
    // connect to DB before the tests start
    dbConnection()
    // Build the dummy data, this also deletes all the existing data stored in database
    await buildDb()
  })

  // Test with everything ok
  test("Test we get the questions correctly", async () => {
    // get user from database
    // const profile = await Profile.findOne()

    // get the token for the default user
    const token = await loginUser("josephine@the-therapists.co.uk", "123456", {})

    // make "GET" request
    const response = await request(app)
      .get("/get-questions/support-details")
      // set the token in the request header
      .set({ Authorization: token.token })

    // const response = await request(app).get(`/get-questions/support-details`)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBeDefined()
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.body[0].inputType).toBeDefined()
    expect(response.body[0].section).toEqual("Support Details")
  })

  test("No questions load if the section doesn't exist", async () => {
    // get the token for the default user
    const token = await loginUser("josephine@the-therapists.co.uk", "123456", {})

    const response = await request(app)
      .get(`/get-questions/monkey`)
      // set the token in the request header
      .set({ Authorization: token.token })

    expect(response.body).toBeDefined()
    expect(response.body.length).toEqual(0)
  })

  test("Test without params", async () => {
    const response = await request(app).get("/get-questions/")
    expect(response.statusCode).toBe(404)
  })
})
