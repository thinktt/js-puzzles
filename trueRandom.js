var getCryptoRandInt = function(min, max) {
	var max32BitInt = 4294967295,
			maxForEvenDist = (max32BitInt - (max32BitInt % (max+1)) -1),
			rand;

		do {
			rand = 	crypto.randomBytes(4).readUInt32BE(0);
		} while(rand > maxForEvenDist);  

		rand = rand % (max+1); 
	  
		return rand; 
}; 


var getRandInt = function(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};


var arr = [];

for(i=0; i<11; i++) {
	arr[i] =0;
}

var rand = 0;

for(i=0; i<10000000; i++) {
	rand = getRandInt(0, 10);
	arr[rand] = arr[rand] + 1;
}

console.log(arr);

