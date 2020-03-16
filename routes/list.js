var express = require('express');
var router = express.Router();
const showCtrl = require('../controller/show')

router.get('/', showCtrl.showAll)

module.exports = router;
