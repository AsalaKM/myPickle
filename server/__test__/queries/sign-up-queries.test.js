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
const getSupportType = require("../../database/queries/getSupportType")
const registerProfile = require("../../database/queries/registerProfile")
const getProfileAnswers = require("../../database/queries/getProfileAnswers")
const storeProfileAnswers = require("../../database/queries/storeProfileAnswers")

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
  test("can't register if user already exists in db", async () => {
    const testUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const { name, email, phone, password } = testUser
    const registeredUser = await registerUser(name, email, phone, password)
    expect(testUser).toBeDefined()
    expect(testUser.email).toBe("josephine@the-therapists.co.uk")
    expect(registeredUser).toBeUndefined()
  })
  test("can't register user with missing data", async () => {
    const testUser = {
      name: "",
      phone: "004407566683",
      email: "test@testme.co.uk",
      address: "666 highway to test E50DW London",
      password: "",
    }
    const { name, email, phone, password } = testUser
    await registerUser(name, email, phone, password).catch(err => expect(err).toBeDefined())
  })

  describe("Tests for getSupportType.js", () => {
    test("can get support type by inserting valid request", async () => {
      const supportTypeQuestion = await ProfileQuestion.findOne({
        questionText: "What best describes your core service offering?",
      })
      const supportTypeQuestionID = supportTypeQuestion._id
      const requestObj = {}
      requestObj[supportTypeQuestionID] = "Qualified therapy or counselling service"
      const gotSupportType = await getSupportType(requestObj)
      const foundSupportType = await SupportType.findById(gotSupportType)
      expect(foundSupportType).toBeDefined()
      expect(foundSupportType.type).toEqual("Therapist")
    })
    test("can't get support type by inserting invalid request", async () => {
      const requestObj = {}
      await getSupportType(requestObj).catch(err => expect(err).toBeDefined())
    })
  })

  describe("Tests for registerProfile.js", () => {
    test("can register a profile with valid user", async () => {
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

      // give user a supportType
      const supportType = await SupportType.findOne({ type: "General" })
      // register Profile
      const registeredProfile = await registerProfile(supportType._id, foundUser._id, false)
      const foundProfile = await Profile.findById(registeredProfile)

      expect(foundProfile).toBeDefined()
      expect(typeof foundProfile).toEqual("object")
      expect(foundProfile._id).toEqual(registeredProfile)
    })
    test("can't register a profile for same user twice", async () => {
      const foundTherapist = await User.findOne({ email: "josephine@the-therapists.co.uk" })
      // give user a supportType
      const supportType = await SupportType.findOne({ type: "General" })
      // register Profile
      const registeredProfile = await registerProfile(
        supportType._id,
        foundTherapist._id,
        false
      ).catch(err => {
        expect(err).toBeDefined()
      })
    })
    test("can't register a profile with data missing", async () => {
      // give user a supportType
      const supportType = await SupportType.findOne({ type: "General" })
      // register Profile
      const registeredProfile = await registerProfile(supportType._id, false).catch(err => {
        expect(err).toBeDefined()
      })
    })
  })

  describe("Tests for getProfileAnswers.js", () => {
    test("check if function filters user schema details and only return profile related answers", async () => {
      const mockReq = {
        "5c201073b5f9fb24f6c5708e": ["Social"],
        name: "Tester",
        email: "tester@gmail.com",
        phone: "4415756370866",
        "5c201073b5f9fb24f6c5708f": "test",
        "5c201073b5f9fb24f6c57090": "test",
        password: "123456",
        password2: "123456",
        "5c201073b5f9fb24f6c57093": "afasfsaf",
        "5c201073b5f9fb24f6c57095": "safsfsaf",
        "5c201073b5f9fb24f6c57097": "asffsafasf",
        "5c201073b5f9fb24f6c57092": "test",
      }
      // run function on req object
      const profileAnswers = await getProfileAnswers(mockReq)
      expect(profileAnswers).toBeDefined()
      expect(typeof profileAnswers).toEqual("object")
      expect(profileAnswers.email).toBeUndefined()
      expect(profileAnswers["5c201073b5f9fb24f6c5708e"]).toEqual(["Social"])
    })
  })
  describe("Tests for storeProfileAnswers.js", () => {
    test("check if function filters user schema details and only return profile related answers", async () => {
      const foundTherapist = await User.findOne({ email: "josephine@the-therapists.co.uk" })
      const foundProfile = await Profile.find({ user: foundTherapist._id })
      const mockReq = {
        "5c201073b5f9fb24f6c5708e": ["Social"],
        "5c201073b5f9fb24f6c5708f": "test",
        "5c201073b5f9fb24f6c57090": "test",
        "5c201073b5f9fb24f6c57093": "afasfsaf",
        "5c201073b5f9fb24f6c57095": "safsfsaf",
        "5c201073b5f9fb24f6c57097": "asffsafasf",
        "5c201073b5f9fb24f6c57092": "test",
      }
      // run function on req object
      const storedProfileAnswers = await storeProfileAnswers(foundProfile._id, mockReq)
      console.log(storedProfileAnswers)
      expect(storedProfileAnswers).toBeDefined()
      expect(typeof storedProfileAnswers).toEqual("object")
      expect(storedProfileAnswers[0].answer).toEqual(["Social"])
    })
  })
})
