var db = require('../db');
var shortid = require('shortid');//id tự động

module.exports.index = function (req, res) {
    
    res.render('banh/index', {
        test: db.get('test').value()
    });
}
module.exports.search = function (req, res) {
    var q = req.query.q;// chổ này đâu có truyền query gì đâu nè
    // để truyền cho có query làm như thế này nhé
    var matchedUsers = db.get('test').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('banh/index', {
        test: matchedUsers
    });
}
module.exports.create = function (req, res) {
    console.log(req.cookies);
    res.render('banh/create');
}
module.exports.get = function(req, res){
    var id = req.params.id;
    var user1 = db.get('test').find({id: id}).value();
    res.render('banh/view',{
        user:user1
    });
}
module.exports.postCreate =  function (req, res) {
    req.body.id=shortid.generate();
    // req.body.id=id++;
    // console.log(res.locals);
    db.get('test').push(req.body).write();
    res.redirect('/banh');
}