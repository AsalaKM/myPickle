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

describe("Tests for editProfileSection controller", () => {
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
  test("Test we get the answers correctly", async () => {
    // // get user from database
    // const profile = await Profile.findOne()

    // get the token for the default user
    const token = await loginUser("josephine@the-therapists.co.uk", "123456", {})

    const response = await request(app)
      .get(`/edit-profile/support-details`)
      // set the token in the request header
      .set({ Authorization: token.token })

    expect(response.statusCode).toBe(200)
    expect(response.body).toBeDefined()
    expect(typeof response.body).toBe("object")
  })

  test("No answers load if user doesn't exist", async () => {
    const response = await request(app).get(`/edit-profile/support-details/monkey`)

    const size = Object.keys(response.body).length

    expect(response.body).toBeDefined()
    expect(size).toBe(0)
  })

  test("Test without params", async () => {
    const response = await request(app).get("/edit-profile/")
    expect(response.statusCode).toBe(404)
  })
})
