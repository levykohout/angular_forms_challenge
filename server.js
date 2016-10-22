var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'public/views/index.html'));

});

app.listen(3000);
