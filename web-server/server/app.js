var app = require('express')()
var proxy = require('express-http-proxy');
var httpProxy = require('http-proxy');
app.use('/proxy', proxy('http://www.qq.com'));
// app.use('/', proxy('http://localhost:8080'));
app.use('/', function(req,res){
    httpProxy.createProxyServer({}).web(req, res, { target: 'http://localhost:8080' })
});
app.listen(3000)