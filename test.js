var SlowTransform = require("./slowtransform");

var st = new SlowTransform(1000/6);

st.on("readable", function(){
	process.stdout.write(st.read());
});

var fs = require("fs");

fs.readFile("test.js", function(err, data){
	st.write(data);
});
