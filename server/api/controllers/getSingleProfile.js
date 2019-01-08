 // load the mongo models
//  const mongoose = require("mongoose")
 const Profile = require("../../database/models/Profile");
 const ProfileAnswer = require("../../database/models/ProfileAnswer")
 const Users = require("../../database/models/User")
 require("../../database/db_connection")()


 //return profileID from userId
 exports.getAnswersProfile = async(req, res) => {
 const {id} = req.params;
   const profileId = await Profile.find({user:id},{_id:1});

   //return the answers for one profile
   const answers = await ProfileAnswer.find({profile:profileId},{answer:1});
   const BasicInfo = await Users.find({_id:id},{name:1,phone:1,email:1})
   res.send({answers, BasicInfo})
 }

