var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res) {
  res.render('index', {title : 'utp judge'});
});

router.get('/problems', function(req, res) {
  res.render('index', {title : 'utp judge'});
});

module.exports = router;
