var express = require('express');
var router = express.Router();
var musicControl = require('../controller/music')
router.post('/nateAPI/search',musicControl.search)
router.post('/nateAPI/songsDetail',musicControl.songDetail)
router.post('/nateAPI/lyricDetail',musicControl.lyricDetail)
router.post('/nateAPI/songUrl',musicControl.songUrl)
router.post('/nateAPI/picUrl',musicControl.picUrl)

module.exports = router;