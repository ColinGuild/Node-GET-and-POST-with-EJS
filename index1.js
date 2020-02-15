var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
var path=require('path');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));//restart server to use static?

app.get('/:userQuery', function(req, res){
	
   res.render('form',{data : {userQuery: req.params.userQuery,
								searchResults: ['book1','book2','book3'],
								loggedIn: true,
								username: 'none',
								pst:false}});
});

app.get('/hello',function(req,res){
	
	res.render('form');
	
});



// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/data', function(req, res){
   console.log(req.body);
     res.render('form',{data : {userQuery: req.params.userQuery,
								searchResults: ['book1','book2','book3'],
								loggedIn: true,
								username: req.body.firstname}});
   
   
});
app.listen(3000);