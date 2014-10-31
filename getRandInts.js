//.........getRandInts...................
// return and array of 10 random intigers
module.exports = function() {
	var getRandInts, i,
			arr = [];

	getRandInts = function(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	};

	for(i=0; i<10; i++) {
		arr.push(getRandInts(1,10));
	}

	return arr;
};

