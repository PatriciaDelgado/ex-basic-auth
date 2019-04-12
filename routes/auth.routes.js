const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth.controller');
const passport = require('passport');

router.get('/register', auth.register);
router.post('/register', auth.doRegister);
router.get('/login', auth.login);
router.post('/login', auth.doLogin);
router.get('/logout', auth.logout);

router.get('/authenticate/google', passport.authenticate('google-auth', { scope: ['openid', 'profile', 'email']}))
router.get('/authenticate/google/cb', auth.loginWithGoogleCallback)

module.exports = router;
