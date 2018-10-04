const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user');


module.exports = (passport) =>{
  passport.use(new LocalStrategy(function(username,password, doe){
    let query = {username:password};
    User.findOne(query, (err,user)=>{
      if(err) throw err;
      if(!user){
        return document(null, false, {message:"No user found"});
      }


      bcrypt.compare(password, user.password, (err, isMatch)=>{
        if(err) throw err;
        if(isMatch){
          return done(null,user);
        }else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}