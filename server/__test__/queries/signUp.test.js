// test for queries that are involved in the sign up process (register user, create profile and initial profile answers)

const mongoose = require("mongoose")
const dbConnection = require("../../database/db_connection")

// load models
const ProfileQuestion = require("../../database/models/ProfileQuestion")
const User = require("../../database/models/user")
const SupportType = require("../../database/models/SupportType")
const Profile = require("../../database/models/Profile")
const ProfileAnswer = require("../../database/models/ProfileAnswer")

// load queries
// const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")

// dummy data
const buildDB = require("../../database/dummy_data_build")

// connect
dbConnection()

beforeEach(async () => {
  await buildDB().catch(err => console.error(err))
  console.log("db built")
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("dummydata builds correctly", () => {
  test("successfully building collections", async () => {
    expect(ProfileQuestion).toBeDefined()
    expect(User).toBeDefined()
    expect(SupportType).toBeDefined()
    expect(Profile).toBeDefined()
    expect(ProfileAnswer).toBeDefined()
  })
})
