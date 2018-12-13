const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  contact_name: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  contact_email: {
    type: String,
    required: true
  },
  contact_address: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Trainer = mongoose.model("Users", UserSchema);
