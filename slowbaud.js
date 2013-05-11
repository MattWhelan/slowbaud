var SlowTransform = require("./slowtransform"),
	fs = require("fs");

var args = process.argv.slice(2);
var interval = parseInt(args.shift());

function printFile(name, next){
	process.stdout.write(name + ":\n\n");
	var st = new SlowTransform(interval);

	st.on("readable", function(){
		process.stdout.write(st.read());
	}).on("end", next);

	fs.readFile(name, function(err, data){
		st.write(data);
	});
}

function processArgs(){
	if(args.length){
		printFile(args.shift(), processArgs);
	}
}

processArgs();
