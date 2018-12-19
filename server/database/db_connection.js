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
  console.log("1 mongoURI.process.env", mongoURI)
  // check if the environment is test
  if (process.env.NODE_ENV === "test") {
    // let DB url equal testing DB
    mongoURI = process.env.mongoURI_TEST
    console.log("2 mongoURI.process.env", mongoURI)
  }

  // create DB connection
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true }
  )
}

module.exports = dbConnection
