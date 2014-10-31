
//............Get Water Module........................
module.exports = (function() {
	var getPools, getPoolWater, getAllWater;

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


	getPoolWater = function(pool) {
		var left, right, midNum, shortSide, water, buildingVol = 0, i;

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


	getAllWater = function(buildings) {
		var pools, water = 0;
		pools = getPools(buildings);

		for(i=0; i < pools.length; i++) {
			water = water + getPoolWater(pools[i]);
		}

		return water;
	}; 

	return getAllWater;

})();



