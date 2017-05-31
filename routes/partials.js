'use strict';

var express = require('express');
var router = express.Router();

/* Page routing */
router.get('/:name', function(req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
});

module.exports = router;