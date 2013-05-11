var SlowTransform = require("./slowtransform"),
	TypeText = require("./typetext"),
	fs = require("fs");

function SlowBaud(baudRate, filenames, Transform){
	var charRate = baudRate / 9.0; //N,8,1
	this.interval = 1000 / charRate;
	this.filenames = filenames;
	this.Transform = Transform;
}

SlowBaud.prototype.printFile = function printFile(name, next){
	process.stdout.write("\n\n-----------------------------------" + name + ":\n\n");
	var st = new (this.Transform)(this.interval);

	st.on("readable", function(){
		process.stdout.write(st.read());
	}).on("end", function(){
		next();
	});

	fs.readFile(name, function(err, data){
		st.write(data);
		st.end();
	});
}

SlowBaud.prototype.processFiles = function processFiles(){
	if(this.filenames.length){
		this.printFile(this.filenames.shift(), this.processFiles.bind(this));
	}
}

if(require.main == module){
	if(process.argv.length < 4){
		process.stderr.write("Usage: node slowbaud [-t] <baudRate> <file> [files...]\n");
		process.exit(1);
	}
	var args = process.argv.slice(2),
		Transform = SlowTransform,
		baudRate = args.shift();

	if(baudRate == '-t'){
		Transform = TypeText;
		baudRate = args.shift();
	}
	baudRate = parseInt(baudRate);

	var sb = new SlowBaud(baudRate, args, Transform);
	sb.processFiles();
	process.stdout.write("\n");
}
