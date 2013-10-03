var User = require('../models/user');

exports.index= function(req,res,done){
    process.nextTick(function(){
        var query =  User.findOne({ 'lsrId': req.body.email });
        query.exec(function(err, oldUser){
            if (oldUser){
                console.log('Existing User:' + oldUser.name + ' found and logged in!');
                done(null, oldUser);
                res.send('/login','Welcome: '+oldUser.name);
            }else{
                //var newUser = new User();
                //newUser.lsrId = req.body.email;
                //newUser.lsrPassword = req.body.password;
                //newUser.save(function(err){
                //    if(err) throw err;
                  //  console.log('New user: ' + newUser.first_name + ' created and logged in!');
                    res.send('/login','User not found please Sign up');
                  //  done(null, newUser);
                //});
            }
        });
    });
};

exports.signup= function(req, res){
    res.render('signup.jade')
};


exports.signedup=function(req,res,done){
    process.nextTick(function(){
                var newUser = new User();
                newUser.lsrId = req.body.email;
                newUser.lsrPassword = req.body.password;
                newUser.name = req.body.firstName+' '+req.body.lastName;
                newUser.lsrPassword = req.body.password;
                newUser.save(function(err){
                if(err) throw err;
                    console.log(err);
                    console.log('New user: ' + newUser.name + ' created and logged in!');
                    res.send('allworked ');
                    done(null, newUser);
                    //res.send({redirect:'/login'});
                });
           // }
        //});
    });
};
