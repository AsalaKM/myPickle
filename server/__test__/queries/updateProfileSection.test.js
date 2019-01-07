const mongoose = require("mongoose")

//load models
const User = require("../../database/models/User")
const SupportType = require("../../database/models/SupportType")
const Profile = require("../../database/models/Profile")
const ProfileQuestion = require("../../database/models/ProfileQuestion")
const ProfileAnswer = require("../../database/models/ProfileAnswer")

//load queries
const updateProfileSection = require("../../database/queries/editProfile/updateProfileSection")
const editProfileSection = require("../../database/queries/editProfile/editProfileSection")
const getQuestions = require("../../database/queries/editProfile/getQuestions")

const dbConnection = require("../../database/db_connection")
const buildDb = require("../../database/dummy_data_build")

// connect
// dbConnection()

// beforeEach(async () => {
//   await buildDb().catch(err => console.log(err))
//   console.log("DB BUILT")
// })

// afterAll(async () => {
//   await mongoose.connection.close()
// })

describe("test updateProfileSection", () => {
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

  test("success by inserting valid data", async () => {
    // get profile ID
    const foundUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const foundProfile = await Profile.find({ user: foundUser._id })
    // get stored answers of that profile section related to user
    const profileID = foundProfile[0]._id
    const storedTargetClientsAnswers = await editProfileSection("target-clients", profileID)
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
    const newTargetClientsAnswers = await editProfileSection("target-clients", profileID)
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

  test("success by inserting valid data by multiple requests if no data in database", async () => {
    // get profile ID
    const foundUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const foundProfile = await Profile.find({ user: foundUser._id })
    const profileID = foundProfile[0]._id
    // get question_ids for profile section
    const questionsTargetClientsSection = await getQuestions("target-clients", profileID)
    const questionIDs = questionsTargetClientsSection.map(i => i._id)

    // delete dummy data for that profile section
    await ProfileAnswer.deleteMany({ profile: profileID })
    const storedTargetClientsAnswers = await editProfileSection("target-clients", profileID)

    // create mock answers for questionIDs to be updated
    const mockAnswerRequest1 = {
      [questionIDs[0]]: ["All – no preference"],
    }
    const mockAnswerRequest2 = {
      [questionIDs[2]]: "Family without children",
    }
    // run update
    await updateProfileSection(profileID, mockAnswerRequest1, storedTargetClientsAnswers)
    // run update
    await updateProfileSection(profileID, mockAnswerRequest2, storedTargetClientsAnswers)
    // check new answers
    const newTargetClientsAnswers = await editProfileSection("target-clients", profileID)
    expect(newTargetClientsAnswers).toBeDefined()
    expect(typeof newTargetClientsAnswers).toBe("object")
    expect(newTargetClientsAnswers).toEqual({
      [questionIDs[0]]: ["All – no preference"],
      [questionIDs[2]]: "Family without children",
    })
  })
  test("no update if invalid question coming from request", async () => {
    // get profile ID
    const foundUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const foundProfile = await Profile.find({ user: foundUser._id })
    // get stored answers of that profile section related to user
    const profileID = foundProfile[0]._id
    const storedTargetClientsAnswers = await editProfileSection("target-clients", profileID)
    // create mock model no different from dummy data for that user
    const mockAnswerRequest = {
      "Not a valid Key": "Family without children",
    }
    // run update
    await updateProfileSection(profileID, mockAnswerRequest, storedTargetClientsAnswers).catch(
      err => {
        expect(err).toBeDefined()
        expect(err.value).toEqual("Not a valid Key")
      }
    )
  })

  test("no update if no changes made within request", async () => {
    // get profile ID
    const foundUser = await User.findOne({ email: "josephine@the-therapists.co.uk" })
    const foundProfile = await Profile.find({ user: foundUser._id })
    // get stored answers of that profile section related to user
    const profileID = foundProfile[0]._id
    const storedTargetClientsAnswers = await editProfileSection("target-clients", profileID)
    // create mock model no different from dummy data for that user
    const mockAnswerRequest = storedTargetClientsAnswers
    // run update
    const updateTargetClientsDetails = await updateProfileSection(
      profileID,
      mockAnswerRequest,
      storedTargetClientsAnswers
    )

    expect(updateTargetClientsDetails).toBeDefined()
    expect(typeof updateTargetClientsDetails).toBe("string")
    expect(updateTargetClientsDetails).toEqual("nothing to update")
  })
})
