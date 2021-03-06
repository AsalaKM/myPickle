// function can be used to update profile
// to be inserted: storedAnswers of profile section (see e.g. target clients update controller)

// load the mongo models
const Profile = require("../../models/Profile")
const ProfileAnswer = require("../../models/ProfileAnswer")
const ProfileQuestion = require("../../models/ProfileQuestion")

const updateProfileSection = async (profileID, requestObject, storedAnswers) => {
  // get profile ID
  const profile = await Profile.findById(profileID)

  // check if request and stored obj are the same - if so end function
  // stringify is an easy way to compare two objects fast
  if (JSON.stringify(storedAnswers) === JSON.stringify(requestObject)) {
    return "nothing to update"
  }
  // loop over request obj
  for (key in requestObject) {
    // check if key exists in storedAnswers
    if ([key] in storedAnswers) {
      // update entry in db
      await ProfileAnswer.findOneAndUpdate(
        { question: key, profile: profile._id },
        { answer: requestObject[key] }
      )
    } else {
      console.log("reached")
      // check if question exists in question model
      const validQuestion = await ProfileQuestion.findById(key)
      if (validQuestion) {
        // insert new entry in db
        const newEntry = new ProfileAnswer({
          profile: profile._id,
          question: key,
          answer: requestObject[key],
        })
        await newEntry.save()
      }
    }
  }
  return "updated successfully"
}

module.exports = updateProfileSection
