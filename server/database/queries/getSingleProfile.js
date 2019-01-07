const mongoose = require("mongoose")
const Answer = require("../models/ProfileAnswer")

require("../db_connection")()

Answer.aggregate([{$group:{_id:"$profile",answers:{$push:'$answer'}}}]).then(res => {
  console.log(res[0]);

})
