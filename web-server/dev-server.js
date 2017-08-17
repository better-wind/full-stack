var session = require('express-session');
var Store = require('connect-mongo')(session);
var settings = require('./modules/db_setting')
var bodyParser  =  require('body-parser');
var app = require('express')()
var router = require('./models/userApp')
app.use(session({
    secret: settings.cookieSecret,
    key: settings.db,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},
    store: new Store({
        db: settings.db,
        host: settings.host,
        port: settings.port,
        url: settings.dbUrl
    })
}));
// app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000)