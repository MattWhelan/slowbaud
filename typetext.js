var SlowTransform = require("./slowtransform"),
	randgen = require("randgen");

function TypeText(interval, options){
	SlowTransform.call(this, interval, options);
}

TypeText.prototype = Object.create(SlowTransform.prototype, {
	constructor: {
		value: TypeText
	}
});

TypeText.prototype.getInterval = function getInterval(){
	var bias = this.interval / 2;
	var mean = this.interval / 2;
	return Math.abs(bias + randgen.rnorm(mean, mean*1.5));
};

module.exports = TypeText;
