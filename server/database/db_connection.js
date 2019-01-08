#!/usr/bin/env node
"use strict"

const mongoose = require("mongoose")

// read "config.env" file and add it's variable to "process.env"
if (!process.env.TRAVIS) {
  require("env2")("./config.env")
}

const dbConnection = () => {
  // get DB url from process.env

  let { mongoURI } = process.env
  // let mongoURI = "mongodb://localhost:27017/mypickledb"
  // check if the environment is test
  if (process.env.NODE_ENV === "test") {
    // let DB url equal testing DB
    mongoURI = process.env.mongoURI_TEST
  }

  // create DB connection
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true }
  )
}

module.exports = dbConnection
