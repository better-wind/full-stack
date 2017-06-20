var express = require('express');
var router = express.Router();
var User = require('./user.js');
router.post('/sellerAdmin/reg',function(req,res){
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
    // User.get(newUser.name, function (err, user) {
    //     console.log(user)
    //     const data = {
    //         code:1,
    //         data:{
    //             user:user
    //         }
    //     }
    //     res.send(JSON.stringify(data))
    //     res.end()
    // })
})
module.exports = router;