var getWater = require('./buildings.js'),
	  getRandInts = require('./getRandInts.js'),
	  buildings = getRandInts(),
	  water = 0;


//.........Try it out..........................
water = getWater(buildings);
console.log(buildings);
console.log('Water: ' + water);

