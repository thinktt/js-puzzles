/*
Start with a random string of 28 characters.
Make 100 copies of the string (reproduce).
For each character in each of the 100 copies, with a probability of 5%, replace (mutate) the character with a new random character.
Compare each new string with the target string “METHINKS IT IS LIKE A WEASEL”, and give each a score (the number of letters in the string that are correct and in the correct position).
If any of the new strings has a perfect score (28), halt. Otherwise, take the highest scoring string, and go to step 2.
*/


//.....Declirations and Intializers..........
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ',
		target = 'METHINKS IT IS LIKE A WEASEL',
		i, j,
		fittest = [],
		offspring = [],
		top = {},
		itterations = 0;


//...........Functions....................
var getRandInt, reproduce;

getRandInt = function(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};

reproduce = function(fittest, target) {
	var	arr = [],
			score = 0,
			chance, i;

	for(i=0; i<target.length; i++) {
			chance = getRandInt(1,20);
			if(chance === 1) {
				arr[i] = BASE_CHARS.charAt(getRandInt(0,26));
				//console.log('Mutants at ' + i + '!');
			}
			else arr[i] = fittest[i];
			if(arr[i] === target[i]) score++;
	}

	return {
		arr: arr,
		score: score
	};
};


//............Main.........................
//build 2D array for offspring var
for(i=0; i<100; i++) {
	offspring[i] = [];
}

//build a random array of chars
for(i=0; i<target.length; i++) {
	fittest[i] = BASE_CHARS.charAt(getRandInt(0,26));
}


do {
	itterations++;
	//creat 100 offspring, along with a score for each
	top.score = 0;
	top.index = 0; 
	
	for (i=0; i<100; i++) {
		offspring[i] = reproduce(fittest, target); 
		if(offspring[i].score > top.score) {
			top.score = offspring[i].score;
			top.index = i; 
		}
	}

	//crown new fittest 
	fittest = offspring[top.index].arr;
} while (top.score < 28);



for (i=0; i<100; i++) {
	console.log(offspring[i].arr.join('') + ' ' + offspring[i].score);
}

console.log('Top Score: ' + top.score); 
console.log('Top Index: ' + top.index); 
console.log('New Fittest: ' + fittest.join(''));
console.log('Itterations: ' + itterations);
console.log();

