const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("../config/keys");

const mongoose = require("mongoose");
const User = mongoose.model("users");

// 'user' here is the user object pulled from the callback if new user is created with passport.use
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// converts cookie to user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// pass in info for configuration options
// console.developers.google.com to create project and get ids and secrets
// NOTE: needed: id from google, secret from google, and then a callback url when these are autorized
// this callback url MUST match the one set up in google project!!!
// there could be other strategies bing used so the callback url needs to be indicative
// of which strategy. ie., /auth/facebook/callback, or /auth/twitter/callback
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true, // tells heroku it is ok and trust the proxy so it is https instead of http
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("Access token: ", accessToken); // user says we can do stuff
      // console.log("Refresh token: ", refreshToken); // allows us to refresh access token - not using
      // console.log("Profile ", profile); // see all the data we have access to when user approves access

      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // user exists!!
        // positional arguments
        // NOTE: first - error message or null
        // NOTE: second - data - in this case the existing user data
        return done(null, existingUser);
      }
      // user does not exist, so need to create in db
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
