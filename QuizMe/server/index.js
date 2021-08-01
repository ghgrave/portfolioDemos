const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

// make sure models is required BEFORE the passport because passport is going to use models
const mongoose = require("mongoose");
require("./models/User");
require("./services/passport"); // no need to assign to variable - just accessing file

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long cookie is valid
    // 30 days * 24 hours in a day * 60 min in hour * 60 seconds in min * 1000 milliseconds,
    keys: [keys.cookieKey], // array because we can set up multiple cookie keys to be used with various stratgies OR randomize
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // no need to assign to a variable - accessing function and invoking at same time by passign app into it

const PORT = process.env.PORT || 5000;
// app.listen(PORT);
// DELETE: 
app.listen(PORT, ()=> console.log(`App on port ${PORT}`))
