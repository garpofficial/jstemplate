var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    gametoken: config.GAMETOKEN,
    gamesecret: config.GAMESECRET,
    development: config.development
  })




});

module.exports = router;
