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
const updateProfileSection = require("../../database/queries/editProfile/updateProfileSection")
const getTargetClientsAnswers = require("../../database/queries/editProfile/getTargetClientsDetails")

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
    const foundTherapist = await User.findOne({ email: "Josephine@the-therapists.co.uk" })
    const expected = "Josephine@the-therapists.co.uk"
    const actual = foundTherapist.email
    expect(actual).toBe(expected)
  })
})

describe("can update profile section target clients", () => {
  test("success by inserting valid data", async () => {
    // get profile ID
    const foundUser = await User.findOne({ email: "Josephine@the-therapists.co.uk" })
    const foundProfile = await Profile.find({ user: foundUser._id })
    // get stored answers of that profile section related to user
    const profileID = foundProfile[0]._id

    const storedTargetClientsAnswers = await getTargetClientsAnswers(profileID)

    const storedTargetClientsKeys = Object.keys(storedTargetClientsAnswers).map(i => i)

    // create mock model different from dummy data for that user
    // differecnes key1: 2 entries less, key2: does not exist in data base yet, key3: 3 totally different entries

    const mockAnswerRequest = {
      [storedTargetClientsKeys[10]]: ["Family without children", "I have been adopted or fostered"],
      [storedTargetClientsKeys[11]]: ["All – no preference"],
      [storedTargetClientsKeys[12]]: ["Epilepsy", "Parkinsons", "Terminal diagnosis"],
    }
    // run update
    await updateProfileSection(profileID, mockAnswerRequest, storedTargetClientsAnswers)
    // check new answers
    const newTargetClientsAnswers = await getTargetClientsAnswers(profileID)
    expect(newTargetClientsAnswers).toBeDefined()
    expect(typeof newTargetClientsAnswers).toBe("object")
    // check for difference before and after update for 1 key
    expect(storedTargetClientsAnswers[storedTargetClientsKeys[12]]).toEqual([
      "Mental health problem(s)",
    ])
    expect(newTargetClientsAnswers[storedTargetClientsKeys[12]]).toEqual([
      "Epilepsy",
      "Parkinsons",
      "Terminal diagnosis",
    ])
  })
})
