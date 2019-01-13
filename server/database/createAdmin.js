const User = require("./models/User")

// load dbConnection
const dbConnection = require("./db_connection")

// load required functions
const registerUser = require("./queries/registerUser")

dbConnection()

const createAdmin = async () => {
  await registerUser("Admin", "admin@gmail.com", "1111111", "admin123", true)

  console.log("admin created")
}

createAdmin().catch(err => console.log(err))

module.exports = createAdmin
