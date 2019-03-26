var express = require("express");
var app = express();

var serverPort = process.env.VCAP_APP_PORT || 3000; //Estamos indicando que utilice la variable de ambiente de bluemix para el puerto
var serverHost = process.env.VCAP_APP_HOST || 'localhost';//Estamos indicando que utilice la variable de ambiente de bluemix para el host
app.get('/', function(req, res) {
    res.send('Hola mundo');
});

var server = app.listen(serverPort, serverHost, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Recibiendo peticiones en http://%s:%s', host, port);
});
