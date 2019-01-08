 // load the mongo models
 const Profile = require("../models/Profile")
 const ProfileAnswer = require("../../models/ProfileAnswer")
 const Users = require("../models/User")
 require("../db_connection")()


 //return profileID from userId
 exports.getAnswersProfile = async(req, res) => {
 const {userId} = req.body;
   const profileId = await Profile.find({user:ObjectId(userId)},{_id:1});

   //return the answers for one profile
   const result = await ProfileAnswer.find({profile:ObjectId(profileId)},{answer:1});
   res.send({result})
 }

 //return Basic information from user collection
 exports.getBasicInfo =  async(req,res)=> {
   const {userId}= req.body;

 Users.find({_id:ObjectId("userId")},{name:1,phone:1,email:1})
 res.send({result})
 }
