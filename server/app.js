const express = require("express")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const dbConnection = require("./database/db_connection")

dbConnection()

const controllers = require("./api/controllers/index")

const app = express()

app
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use((req, res, next) => {
    // Allow all application (from another server or port ) to do a request
    res.header("Access-Control-Allow-Origin", "*")
    // '*'==> allow specific headers || you can choose headers you want like 'Origin, X-Request-With, Content-Type, Accept, Authorization '
    res.header(
      "Access-control-Allow-Headers",
      "Origin, X-Request-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Mehtods", "GET,POST,PATCH,DELETE,PUT")
      // So now we do have such a answer for CORS protection
      return res.status(200).json({})
    }
    next()
  })
  .use(controllers)

module.exports = app
