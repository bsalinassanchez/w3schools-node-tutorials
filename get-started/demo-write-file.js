var fs = require("fs");
const { isBuffer } = require("util");

fs.writeFile("mynewfile3.txt", "Hello Content!", function (err) {
	if (err) throw err;
	console.log("Saved!");
});
