//CopyRight Tag Solutions pvt.ltd 2013

exports.index = function(req, res){
  res.render('index', { title: 'LSR', routePath: "home" });
};

exports.index = function(req, res){
    res.render('index', { title: 'LSR', routePath: "loggedin" });
};