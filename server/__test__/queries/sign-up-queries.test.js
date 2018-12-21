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
const registerUser = require("../../database/queries/registerUser")
// connect
dbConnection()

beforeEach(async () => {
  await buildDb().catch(err => console.log(err))
  console.log("DB BUILT")
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe("can build dummy data correctly", () => {
  test("successfully creates collections", async () => {
    expect(SupportType).toBeDefined()
    expect(User).toBeDefined()
    expect(ProfileQuestion).toBeDefined()
    expect(Profile).toBeDefined()
    expect(ProfileAnswer).toBeDefined()
    // check if therapist user gets created
    const foundTherapist = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const expected = "josephine@the-therapists.co.uk"
    const actual = foundTherapist.email
    expect(actual).toBe(expected)
  })
})

describe("Tests for getRegisterProfileQuestions.js", () => {
  test("getRegisterProfileQuestions returns the right question", async () => {
    const canGetRegisterQuestions = await getRegisterQuestions()
    expect(canGetRegisterQuestions).toBeDefined()
    expect(canGetRegisterQuestions.length).toBe(10)
  })
  test("getRegisterProfileQuestions error handling", async () => {
    // leave out async behaviour to throw an error
    getRegisterQuestions().catch(err => expect(err).toBeDefined())
  })
})

describe("Tests for registerUser.js", () => {
  test("can register a user using valid data", async () => {
    const testUser = {
      name: "testMeBabyOneMoreTime",
      phone: "004407566683",
      email: "test@testme.co.uk",
      address: "666 highway to test E50DW London",
      password: "123456",
    }
    const { name, email, phone, password } = testUser
    const registeredUser = await registerUser(name, email, phone, password)
    const foundUser = await User.findById(registeredUser)
    expect(foundUser).toBeDefined()
    expect(typeof foundUser).toEqual("object")
    expect(foundUser.name).toEqual("testMeBabyOneMoreTime")
  })
})
