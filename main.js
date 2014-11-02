var getWater1 = require('./buildings.js'),
	  getWater2 = require('./basins.js'),
	  getRandInts = require('./getRandInts.js'),
	  buildings = getRandInts(),
	  water1 = 0, water2 = 0, i;


//.........Try it out..........................


function runTest(timesToRun) {
	for(i=0; i<timesToRun; i++) {
		water1 = 0;
		water2 = 0; 
		buildings = getRandInts();
		water1 = getWater1(buildings);
		water2 = getWater2(buildings);

		console.log();
		console.log(buildings);
		console.log('Toby\'s area....' + water1);
		console.log('Dave\'s area....' + water2);
		if (water1 === water2) console.log('pass');
		else console.log('fail');
	}
}

runTest(5);

