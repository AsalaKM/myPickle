const mongoose = require("mongoose")

// load models
// const ProfileQuestion = require("../../models/ProfileQuestion")
const Profile = require("../../models/Profile")
// const SupportType = require("../../models/SupportType")

// require query file we're testing
const editProfileSection = require("./editProfileSection")

// get database connection
const dbConnection = require("../../db_connection")

// build dummy data
const buildDb = require("../../dummy_data_build")

describe("Test for editProfileSection", () => {
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
  test("Test we get the answers for that requested profile section correctly", async () => {
    // get user from database
    const profile = await Profile.findOne()

    editProfileSection("support-details", profile._id)
      .then(answers => {
        expect(answers).toBeDefined()
        expect(typeof answers).toEqual("Object")
      })
      .catch(err => expect(err).toBeDefined())
  })

  // Test error handling
  test("check editProfileSection error handling", async () => {
    editProfileSection("monkey").catch(err => expect(err).toBeDefined())
  })
})
