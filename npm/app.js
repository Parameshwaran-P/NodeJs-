// var http = require('http');
// var url = require('url');
// var adr = 'http://localhost:8080/index.html?name=paramesh&age=23';
// var fs = require('fs');
//var server = require('./server');

// http.createServer((req, res) => {

// // res.write("This is a test:" + server.demo());
// // res.end('Hello World\n');

// // res.write(req.url);
// fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.write(data);
//    return res.end();
// })
// // var det= url.parse(req.url,true).query
// // var txt = det.name+"is a"+det.age
// // res.end(txt);

// }).listen(8080);

// fs.appendFile('p1.txt','hi this is a txt file',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('file saved')
// })

// var sim = url.parse(adr, true);
// console.log(sim.pathname);
// console.log(sim.hostname);
// console.log(sim.search);


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);


var events = require('events');
var eventEmitter = new events.EventEmitter();


var myEventHandler = function () {
  console.log('I hear a scream!');
}


eventEmitter.on('scream', myEventHandler);


eventEmitter.emit('scream');

var buffer= new Buffer(256)
len = buffer.write("test")
console.log(buffer);

var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);