var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});
connection.connect(function(err){
  if(!err){
    console.log("Connected to database");
  }
  else{
    console.log("Failed to connect to database");
  }
});
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});*/

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/pro', function(req, res, next) {
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = req.body.txt3;
  var d = req.body.txt4;
  var e = req.body.txt5;
  //var c = parseInt(a) + parseInt(b);
  var f = "Thanks for contacting me.";
  //console.log(a+b);
  //Query
  connection.query("insert into portfolio (pf_name,pf_em,pf_phn,pf_qu,pf_ch) values (?,?,?,?,?)",[a,b,c,d,e],
  function(err,result,field){
    res.render('thanks', {myf:f});
  });
});

router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Express' });
});

router.get('/intro', function(req, res, next) {
  res.render('intro', { title: 'Express' });
});
module.exports = router;
