var express = require('express');
var router = express.Router();
const passport = require('passport')
const indexCtrl = require('../controller/index')

router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res){
  req.logout()
  res.redirect('/')
})

router.get('/', indexCtrl.index)
router.get('/note', indexCtrl.note)
router.post('/create', indexCtrl.create)

module.exports = router;
