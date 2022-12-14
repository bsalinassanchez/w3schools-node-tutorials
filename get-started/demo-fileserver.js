var http = require("http");
var url = require("url");
var fs = require("fs");
const { isBuffer } = require("util");

http
	.createServer((req, res) => {
		var q = url.parse(req.url, true);
		var filename = "." + q.pathname;
		fs.readFile(filename, (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/html" });
				return res.end("404 not found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080);
