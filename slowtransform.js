var stream = require("stream");

function SlowTransform(interval, options){
	stream.Transform.call(this, options);
	this.interval = interval;
}

SlowTransform.prototype = Object.create(stream.Transform.prototype, { 
	constructor: { 
		value: SlowTransform 
	}
});

SlowTransform.prototype._transform = function(chunk, encoding, done){
	var i = 0,
		that = this;
	function process(){
		if(i < chunk.length){
			that.push(chunk.slice(i, i+1));
			++i;
			setTimeout(process, that.interval);
		}else{
			done();
		}
	}
	setTimeout(process, this.interval);
}

module.exports = SlowTransform;
