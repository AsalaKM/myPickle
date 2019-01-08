 // load the mongo models
 const Profile = require("../../database/models/Profile")
 const ProfileAnswer = require("../../database/models/ProfileAnswer")
 const Users = require("../../database/models/User")
 require("../db_connection")()


 //return profileID from userId
 exports.getAnswersProfile = async(req, res) => {
 const {userId} = req.body;
   const profileId = await Profile.find({user:ObjectId(userId)},{_id:1});

   //return the answers for one profile
   const answers = await ProfileAnswer.find({profile:ObjectId(profileId)},{answer:1});
   const BasicInfo = await Users.find({_id:ObjectId("userId")},{name:1,phone:1,email:1})
   res.send({answers, BasicInfo})
 }
