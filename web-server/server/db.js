var mongo = require("mongodb");

function openDatabase(host,port,databaseName){
    //创建数据库所在的服务器
    var server = new mongo.Server(host, port, {auto_reconnect: true});
    var db = new mongo.Db(databaseName, server, {safe: true});
    db.open(function (err, db) {
        if (err) {
            console.log('打开数据库失败');
            return -1;
        }
        else {
            console.log('打开数据库成功');

        }

    });
    return db;
}
var db;
db=openDatabase("localhost",27017,"demo");