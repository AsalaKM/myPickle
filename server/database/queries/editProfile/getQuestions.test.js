const mongoose = require("mongoose")

// load models
// const ProfileQuestion = require("../../models/ProfileQuestion")
const Profile = require("../../models/Profile")
// const SupportType = require("../../models/SupportType")

// require query file we're testing
const getQuestions = require("./getQuestions")

// get database connection
const dbConnection = require("../../db_connection")

// build dummy data
const buildDb = require("../../dummy_data_build")

describe("Test for  get_all_answers", () => {
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
  test("Test we get the questions correctly", async () => {
    // get user from database
    const profile = await Profile.findOne()

    getQuestions("support-type", profile._id)
      .then(questions => {
        expect(questions).toBeDefined()
        expect(questions.length).toBeGreaterThan(0)
        expect(questions[0].questionText).toBeDefined()
        expect(questions[0].section).toEqual("Support Details")
      })
      .catch(err => expect(err).toBeDefined())
  })

  // Test error handling
  test("check getSurveyQs error handling", async () => {
    getQuestions("monkey", "tennis").catch(err => expect(err).toBeDefined())
  })
})
