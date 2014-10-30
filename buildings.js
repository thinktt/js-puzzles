var buildings = [],
		water = 0,
    i, j,  
    pool, getRandomInt, getPools, getWater,
    pools = []; 


//.........Build the Buildings.......................
getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


for(i=0; i<10; i++) {
	buildings.push(getRandomInt(1,10));
}



//............Main Code........................
//buildings = [ 7, 3, 4, 6, 1, 5, 2, 5, 9 ];


getPools = function(buildings) {
	var tallest, i, pool, pools = [];

	//clone the array as not to mess with the original
	buildings = buildings.slice(0);

	while(buildings.length > 0) {
		//find the first building that has a shorter building next to it
		//remove everythng before that in the process
		while (buildings[0] <= buildings[1]) {
			buildings.shift();
		}

		//if there are not at least 3 buildings left clear the
		//array, there are no pools in this set
		if(buildings.length < 3) buildings = [];

		//console.log(buildings);

		tallest = 1;

		//find the tallest building to the right, but stop at the
		//building equal or greater than the the left most building
		for(i=2; i < buildings.length; i++) {
			if(buildings[i] > buildings[tallest]) tallest = i;
			if(buildings[i] >= buildings[0]) break;
		}

		//grab the pool set as long as there was a 
		//third building found taller than the second building
		if(tallest !== 1) pool = buildings.slice(0, tallest+1);
		else pool = [];

		//if there is anything in the pool add it to the 
		//pool collection
		if(pool.length > 0) pools.push(pool);

		//remove the pool from the building set, but 
		//leaving the right most building
		buildings = buildings.slice(tallest);
	}
	return pools;
};



getWater = function(pool) {
	var left, right, midNum, shortSide, water, buildingVol = 0;

	left = pool[0];
	right = pool[pool.length-1];
	midNum = pool.length - 2;
	shortSide = left < right ? left : right;


	for(i=1; i<pool.length-1; i++) {
		buildingVol = buildingVol + pool[i];
	}

	water = (shortSide * midNum)  - buildingVol;

	return water; 

};

pools = getPools(buildings);

for(i=0; i < pools.length; i++) {
	water = water + getWater(pools[i]);
}


console.log(buildings);
console.log(pools);
console.log('Water: ' + water);