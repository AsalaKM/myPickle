// load the mongo models
const Profile = require("../../models/Profile")
const ProfileAnswer = require("../../models/ProfileAnswer")

const getTargetClientDetails = require("./getTargetClientsDetails")

const updateTargetClientsDetails = async (profileID, reqAnswers) => {
  //get profile ID
  const profile = await Profile.findById(profileID)
  // get stored answers for that profile
  const storedAnswers = await getTargetClientDetails(profile._id)

  //check if request and stored obj are the same - if so end function
  // stringify is an easy way to compare two objects fast
  if (JSON.stringify(storedAnswers) === JSON.stringify(reqAnswers)) {
    return
  }
  // loop over request obj
  for (key in reqAnswers) {
    // check if key exists in storedAnswers
    if ([key] in storedAnswers) {
      // update entry in db
      await ProfileAnswer.findOneAndUpdate(
        { question: key, profile: profile._id },
        { answer: reqAnswers[key] }
      )
    } else {
      // insert new entry in db
      const newTargetEntry = new ProfileAnswer({
        profile: profile._id,
        question: key,
        answer: reqAnswers[key],
      })
      await newTargetEntry.save()
    }
  }
}

module.exports = updateTargetClientsDetails
