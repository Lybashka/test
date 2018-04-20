var fs = require('fs');
var url  = require('url');

var html_bodyhtml=fs.readFileSync('ll1.html', 'utf8');
var html_bodyjs=fs.readFileSync('ll1.js', 'utf8');
var http = require("http");
http.createServer(function(request, response){
 
	if (request.url == '/ll1.html' || request.url == '/') {
	    response.setHeader("Content-Type", "text/html"); 
	    response.end(html_bodyhtml);
    };
	if (request.url == '/ll1.js') {
	    response.setHeader("Content-Type", "text/html"); 
	    response.end(html_bodyjs);
    };
	 
}).listen(80);