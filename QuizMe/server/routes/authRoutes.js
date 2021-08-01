const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate(
      "google", // this is how OAuth knows to you use the google strategy
      { scope: ["profile", "email"] }
    )
    /*
      https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
      response_type=code&
      redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
      scope=profile%20email&
      client_id=955654210454-mfnakgml8p6n6k909n4p0o85ckv7ngag.apps.googleusercontent.com&
      flowName=GeneralOAuthFlow
      */
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout(); // logout is attached by passport to req object!!!
    res.send(req.user); // should be undefined or null if logged out correctly
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
