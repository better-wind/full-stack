var User = require('./../models/user.js');
exports.getUser = function(req,res){
    console.log('server control')
    var newUser = new User({
        name: req.body.name,
        password: req.body.password,
    });
    User.get(newUser.name)
        .then((user)=>{
            const data = {
                code:1,
                data:{
                    user:user
                }
            }
            res.send(JSON.stringify(data))
            res.end()
        })
}