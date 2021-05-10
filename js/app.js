var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename)
  if (filename == '/' || filename == './' ){
    filename = './index.html';
  }


  fs.readFile(filename, function(err, data) {
    console.log(q.pathname)
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 La página no existe");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(process.env.PORT || 5000);
