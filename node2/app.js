var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(module1.myString);
	module1.myFunction();
	module2.myFunction();
	response.write(module2.myVariable);
	response.end();
}

http.createServer(onRequest).listen(8000);