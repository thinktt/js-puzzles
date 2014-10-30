var buildings = [],
		water = 0,
    i, j, left, right, tallest,
    pool, getRandomInt,
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
console.log(buildings);



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

console.log(pools);




// //iterate through array removing elements until it is empty
// while(buildings.length > 0) {

// 	//find the first building that has a shorter building next to it
// 	//remove everythng before that in the process
// 	while (buildings[0] < buildings[1]) {
// 		buildings.shift();
// 	}

// 	//start by makring index 1 as the tallest known 
// 	//building to the right
// 	tallest = 1;
	
// 	for(i=1; i < buildings.length; i++) {

// 		if(buildings[i] >= buildings[0]) {
// 			break;
// 		}
// 		if(buildings[i] >= buildings[tallest]) tallest = i;
// 	}

// 	//if no taller or equally tall building to the left most
// 	//building is found end the pool at the next tallest building 
// 	if(i === buildings.length) i = tallest;

// 	pool = buildings.slice(0, i+1); 

// 	if(pool.length > 2) pools.push(pool);
// 	buildings = buildings.slice(i);

// }




// while (buildings[buildings.length-1] < buildings[buildings.length-2]) {
// 	buildings.pop();
// }
//console.log(pools);
//console.log();
//console.log(pools);





//divide array into pools

//find the first tallest
//what's the tallest building that's not taller or equal

//first number is left

//if number next to left is higher next becomes left



