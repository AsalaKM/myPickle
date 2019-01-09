 // load the mongo models
const ProfileAnswer = require("../../database/models/ProfileAnswer")
require("../../database/db_connection")()


exports.getAnswersProfile = async (req,res) => {
 const profileID = req.params;
const allAnswers = await ProfileAnswer.aggregate([{ $match : { profile : profileID } },
 { $lookup: {
 from:"questions",
 localField:"question",
 foreignField:"_id",
 as:"question",

 }}])

// const BasicInfo = await Users.find({_id:id},{name:1,phone:1,email:1})
// console.log(res);
res.send({allAnswers})
}

