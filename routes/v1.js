'use strict'

let fs = require("fs")
let path = require("path")

module.exports = (app) => {
	let files = fs.readdirSync("routes/v1");
	
	for(var i = 0, len = files.length; i < len; i ++){
		let file = files[i];
		let filePath = path.join("routes/v1", file);
		if(fs.statSync(filePath).isFile() && file !== '.DS_Store'){
			app.use(["/v1", file.replace(".js","")].join("/"), require(["./v1", file].join("/")))
			console.log(["/v1", file.replace(".js","")].join("/"), "bind" ,["'routes/v1", file + "'"].join("/"))
		}
	}
}