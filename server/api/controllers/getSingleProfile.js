 // load the mongo models
//  const mongoose = require("mongoose")
 const Profile = require("../../database/models/Profile");
 const ProfileAnswer = require("../../database/models/ProfileAnswer")
 const Users = require("../../database/models/User")
 require("../../database/db_connection")()


 //return profileID from userId
//  exports.getAnswersProfile = async(req, res) => {
//  const {id} = req.params;
//  console.log(id,'id');

//    const profileId = await Profile.find({user:id},{_id:1});

//    //return the answers for one profile
//    const answers = await ProfileAnswer.find({profile:profileId},{answer:1});
//    const BasicInfo = await Users.find({_id:id},{name:1,phone:1,email:1})
//    res.send({answers, BasicInfo})
//  }


// for testing
exports.getAnswersProfile = async (req,res) => {


  const profileID = req.params;
  console.log(profileID,'safsaf');
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


// db.answers.aggregate(     [ { $match : { profile : ObjectId("5c2c9c41d2a9fe38cc19d0c3") } }, ] ).pretty()

// ProfileAnswer.aggregate([{ $match : { profile : profileID } },
// { $lookup:{
// from:"questions",
// localField:"question",
// foreignField:"_id",
// as:"question",
// }}])

