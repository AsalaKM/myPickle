const mongoose = require("mongoose")
const dbConnection = require("../../database/db_connection")
const buildDb = require("../../database/dummy_data_build")

//load models
const User = require("../../database/models/User")
const SupportType = require("../../database/models/SupportType")
const Profile = require("../../database/models/Profile")
const ProfileQuestion = require("../../database/models/ProfileQuestion")
const ProfileAnswer = require("../../database/models/ProfileAnswer")

//load queries
const getRegisterQuestions = require("../../database/queries/getRegisterQuestions")

// connect
dbConnection()

beforeEach(async () => {
  await buildDb().catch(err => console.log(err))
  console.log("DB BUILT")
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("Getting Register Questions", () => {
  test("successfully creates collections", async () => {
    expect(SupportType).toBeDefined()
    expect(User).toBeDefined()
    expect(ProfileQuestion).toBeDefined()
    expect(Profile).toBeDefined()
    expect(ProfileAnswer).toBeDefined()
  })
})
