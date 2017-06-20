var userService = require('./../service/user');
exports.getUser = function(req,res){
    console.log('user control')
    userService.getUser(req,res)
}