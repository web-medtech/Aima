const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    // Remove phone number white spaces before adding.
    phoneNumber: req.body.phoneNumber.split(' ').join(''),
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    bloodGroup: req.body.bloodGroup,
    userCondition: req.body.userCondition,
    governorate: req.body.governorate
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'})
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;

    if (!user) {
      return res.json({success: false, msg: 'User not found'})
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week in seconds
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            birthDate: user.birthDate,
            bloodGroup: user.bloodGroup,
            userCondition: user.userCondition,
            governorate: user.governorate
          }
        });
      } else {
        return res.json({success: false, msg: 'wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
