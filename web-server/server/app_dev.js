var app = require('express')()
var http = require('http')
var proxy = require('express-http-proxy');
var httpProxy = require('http-proxy');
var proxyMiddleware = require('http-proxy-middleware')
// app.use('/proxy', proxy('http://www.qq.com'));
var proxyTable = {
        '/sellerAdmin': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                '^/sellerAdmin': '/sellerAdmin'
            }
        }
    }
Object.keys(proxyTable).forEach(function (context) {
    console.log(context)
    var options = proxyTable[context]

    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})
app.use('/', proxy('http://localhost:8080'));

// app.use('/', proxy('http://localhost:8080'));
// app.use('/api/', proxy("localhost:3000",{
//     forwardPath:function(req,res){
//         return req._parsedUrl.path
//     }
// }));
// app.use('/api/data/activity', proxy("localhost:3000",{
//     forwardPath:function(req,res){
//         return req._parsedUrl.path
//     }
// }));
// app.use('/api', proxy('http://localhost:3000'));
// app.get('/api/data/activity', function(req, res) {
//     console.log(req.url);
//     // var url = 'localhost:8080' + req.url;
//     // req.pipe(request(url)).pipe(res);
// });
// app.use('/', function(req,res){
//     httpProxy.createProxyServer({}).web(req, res, { target: 'http://localhost:8080' })
// });
// app.get('/api', function(req, res) {
//
//     find(req,function(data){
//         res.contentType('json');
//         res.send(JSON.stringify(data));
//         res.end()})
//     // var url = 'localhost:8080' + req.url;
//     // req.pipe(request(url)).pipe(res);
// });
// function find(req,success){
//     var headers = req.headers;
//     headers.host = 'localhost';
//
//     var options = {
//         host: 'localhost',
//         port: 3000,
//         path: '/api',
//         method: 'GET',
//         headers: headers
//     };
//
//     var req = http.request(options, function(res) {
//         res.setEncoding('utf8');
//         res.on('data', function (data) {
//             console.log('>>> ', data);
//             data = JSON.parse(data);
//             success(data);
//         });
//     });
//
//     req.on('error', function(e){
//         console.log("auth_user error: " + e.message);
//     });
//
//     req.end();
//     console.log(req.url);
// }
app.listen(9999)