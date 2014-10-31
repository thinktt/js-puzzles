var buildingsMod = require('./buildings.js'),
	  buildings = buildingsMod.makeBuildings(),
	  water = 0;



//.........Build Some Random Buildings...................
getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
for(i=0; i<10; i++) {
	buildings.push(getRandomInt(1,10));
}

//.........Try it out..........................
water = buildingsMod.getWater(buildings);
console.log(buildings);
console.log('Water: ' + water);

