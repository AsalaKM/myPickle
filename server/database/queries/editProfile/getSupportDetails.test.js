const mongoose = require("mongoose")

// load models
// const ProfileQuestion = require("../../models/ProfileQuestion")
const Profile = require("../../models/Profile")
// const SupportType = require("../../models/SupportType")

// require query file we're testing
const getSupportDetails = require("./getSupportDetails")

// get database connection
const dbConnection = require("../../db_connection")

// build dummy data
const buildDb = require("../../dummy_data_build")

describe("Test for getSupportDetails", () => {
  afterAll(async () => {
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
  test("Test we get the supportDetails correctly", async () => {
    // get user from database
    const profile = await Profile.findOne()

    getSupportDetails(profile._id)
      .then(answers => {
        expect(answers).toBeDefined()
        expect(typeof answers).toEqual("Object")
      })
      .catch(err => expect(err).toBeDefined())
  })

  // Test error handling
  test("check getSupportDetails error handling", async () => {
    getSupportDetails("monkey").catch(err => expect(err).toBeDefined())
  })
})
