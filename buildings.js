var buildings = [],
		water = 0,
    i, j, left, right,
    pool, getRandomInt,
    pools = []; 

getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};





for(i=0; i<10; i++) {
	buildings.push(getRandomInt(1,10));
}


console.log(buildings);

// while (buildings[buildings.length-1] < buildings[buildings.length-2]) {
// 	buildings.pop();
// }

console.log(buildings);


while(buildings.length > 0) {

	while (buildings[0] < buildings[1]) {
		buildings.shift();
	}

	for(i=1; buildings[i] < buildings[0]; i++);
	pool = buildings.slice(0, i+1); 

	if(pool.length > 2) pools.push(pool);
	buildings = buildings.slice(i);

}

console.log(pools);









//console.log();
//console.log(pools);





//divide array into pools

//find the first tallest
//what's the tallest building that's not taller or equal

//first number is left

//if number next to left is higher next becomes left



