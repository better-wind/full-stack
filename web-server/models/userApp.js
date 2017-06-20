var express = require('express');
var router = express.Router();
var userControl = require('./../controller/user')
router.post('/sellerAdmin/reg',userControl.getUser)
module.exports = router;