const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_I
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRE
passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID ,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://localhost:5050/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
    });
  }
));

passport.serializeUser((user, done) =>{
    done(null, user);
})

passport.deserializeUser((user, done) =>{
    done(null, user);
})