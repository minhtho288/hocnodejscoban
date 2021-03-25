var express = require('express');
var cookieParser=require('cookie-parser');
var authRoute=require('./routes/auth.route');
var authMiddleware=require('./middlewares/auth.middleware');
var port = 3000;
var userRoute = require('./routes/user.route');
// var shortid = require('shortid');
// var bodyParser=require('body-parser');
var app = express();
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function (req, res) {
    res.render('index');
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// app.post('/banh/create', function (req, res) {
//     temp = test[test.length - 1].id + 1;// lấy phần tử id tăng dần
//     test.push({ id: temp, name: req.body.xxx });
//     res.redirect('/banh');
// })
app.use(cookieParser('ffghhjhjhkjk32325'));
app.use('/banh',authMiddleware.requireAuth,userRoute);

app.use('/auth',authRoute);
app.listen(port, function () {
    console.log('Server listening on port' + port);
});