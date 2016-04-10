var express        = require('express');
var app            = express();



//Set the port to localhost:8000!
var port = process.env.PORT || 8000;

//directory that has my index.html!
app.use(express.static(__dirname + '/public'));


app.listen(port);

console.log('Wanderlust is live on Port localhost:' + port);

exports = module.exports = app;
