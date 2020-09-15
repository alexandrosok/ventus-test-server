var express = require('express');
var router = express.Router();

router.use('/auth/', require('./lib/auth.route'));
router.use('/data/', require('./lib/data.route'));


module.exports = router;
