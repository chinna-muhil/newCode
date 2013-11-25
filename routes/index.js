//CopyRight Tag Solutions pvt.ltd 2013

exports.index = function(req, res){
  res.render('index', { title: 'LSR', routePath: "home" });
};

exports.index = function(req, res){
    res.render('index', { title: 'LSR', routePath: "loggedin" });
};

/*exports.index =function(req,res){
    res.render('index', { title: 'LSR', routePath: "compare"});
};*/

/*exports.index = function(req,res){
    res.render('index',{products: docs,routePath:"comparison"});
};*/

/*exports.loggedin = function(req, res){
    res.render('loggedin', { title: 'LSR',routePath:"home", user: req.user});
};*/