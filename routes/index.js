var express = require('express');
var router = express.Router();
var db = require('../src/models/index');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    let data = await db.User.findAll();
    res.render('index', { title: 'Express', data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
