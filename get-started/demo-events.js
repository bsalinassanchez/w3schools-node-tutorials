var fs = require("fs");

var rs = fs.createReadStream("./mynewfile3.txt");
rs.on("open", () => {
	console.log("The file is open");
});
