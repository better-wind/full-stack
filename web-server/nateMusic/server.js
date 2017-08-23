var bodyParser  =  require('body-parser');
var app = require('express')()
var router = require('./models/music')

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.listen(4000)