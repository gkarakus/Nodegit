//var http = require('http');
//var port = process.env.PORT || 1938;

var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("My server basladi");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);


function newConnection(socket) {
   
   //console.log(socket);
   console.log('new connection: ' + socket.id);

   socket.on('mouse', mouseMsg);

   function mouseMsg(data) {
      socket.broadcast.emit('mouse', data);
     // console.log(data);
   }

}


//var fs = require('fs');
//http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  //fs.readFile('jsdene.html', function(err, data) {
  //  res.writeHead(200, {'Content-Type': 'text/html'});
  //  res.write(data);
  //  return res.end();
 // });
//}).listen(8080);

