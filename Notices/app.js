var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/games', function(req, res){

    res.render("secao/games");

});

app.listen(3030);