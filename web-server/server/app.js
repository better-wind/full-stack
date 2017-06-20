var app = require('express')()
var proxy = require('express-http-proxy');
var httpProxy = require('http-proxy');
var router = require('express').Router();
// app.use('/proxy', proxy('http://www.qq.com'));
// app.use('/', proxy('http://localhost:8080'));
// app.use('/', function(req,res){
//     httpProxy.createProxyServer({}).web(req, res, { target: 'http://localhost:8080' })
// });
var data = {
    status: '100',
    msg: '操作成功',
    data: {
        userId: '123456',
    }
};
app.get('/sellerAdmin/aa', function (req, res, next) {
    console.log('aaaa')
    res.contentType('json');
    res.send(JSON.stringify(data));
    res.end();
});
app.listen(3000)