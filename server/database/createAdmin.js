const Profile = require("./models/Profile")
const SupportType = require("./models/SupportType")

// load dbConnection
const dbConnection = require("./db_connection")

// load required functions
const registerUser = require("./queries/registerUser")

dbConnection()

const createAdmin = async () => {
  // create user
  const admin = await registerUser("Admin", "admin@gmail.com", "1111111", "admin123", true)
  console.log("admin user created")

  // get support type of general users
  const supportType = await SupportType.findOne({ type: "General" })

  // register profile
  const adminProfile = new Profile({
    supportType: supportType._id,
    user: admin._id,
  })

  await adminProfile.save()
  console.log("admin profile created")
}

createAdmin().catch(err => console.log(err))

module.exports = createAdmin
