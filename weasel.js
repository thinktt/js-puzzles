/*
Start with a random string of 28 characters.
Make 100 copies of the string (reproduce).
For each character in each of the 100 copies, with a probability of 5%, replace (mutate) the character with a new random character.
Compare each new string with the target string “METHINKS IT IS LIKE A WEASEL”, and give each a score (the number of letters in the string that are correct and in the correct position).
If any of the new strings has a perfect score (28), halt. Otherwise, take the highest scoring string, and go to step 2.
*/


var baseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';

getRandInt = function(min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};

var arr = [];
var i =0; 
var rand; 

for(i=0; i<100; i++) {
	rand = getRandInt(0,9);
	
}


console.log(arr); 