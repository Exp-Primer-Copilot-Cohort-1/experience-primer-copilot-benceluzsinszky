var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static('public'));

// Set route
app.get('/', function(req, res){
    res.render('index');
});

app.get('/comments', function(req, res){
    res.json(comments);
});

app.post('/comments', function(req, res){
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err){
        if (err){
            console.log(err);
        }
    });
    res.json(comments);
});

// Start server
app.listen(3000, function(){
    console.log('Server is running on port 3000');
});