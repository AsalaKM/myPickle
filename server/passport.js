const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const User = require("./database/models/User")

require("env2")("./config.env")
// set up options - this gets the token to check it matches our secret and tells it to put the token into the auth header
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.secretOrKey

module.exports = passport => {
  passport.use(
    // use mongoose findById method and pass it the id stemming from the bearer toke auth object named jwt payload

    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("JWT", jwt_payload.profileId)
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            // if user exists set up object with profileId to send back
            const userInfo = { profileId: jwt_payload.profileId }
            return done(null, userInfo)
          }
          return done(null, false)
        })
        .catch(err => console.log(err))
    })
  )
}
