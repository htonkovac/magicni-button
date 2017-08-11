const http = require('http');
const fs = require('fs');

 userCount = 0;

let server = http.createServer( (req, res) => {
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

	   if(req.url == '/') {
	        userCount++;
		console.log(req.url);
		console.log('no. visits #' + userCount + '\n');
	   }

	if(req.url == '/hrvojev-magicni-button.js'){
		res.writeHead(200, {"Content-Type": "text/javascript"});
		fs.readFile('hrvojev-magicni-button.js', (err, data) => {
		res.end(data);
		})
	} else {
	
		fs.readFile('index.html', (err, data) => {
		res.end(data);
		})

	}

	
	return;
});

server.listen(80);

console.log('Starting ...');

