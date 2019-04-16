var http = require('http');

var server = http.createServer(function (req, res){
    var rotaURL = req.url;

    if(rotaURL == '/games'){
        res.end("CBLOL da Zueira");
    }else{
        res.end("EITA CARAAAIO")
    }

});

server.listen(3030);