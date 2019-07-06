var strangers = ["Joyce",
  "Jim ",
  "Mike",
  "Eleven",
  "Dustin",
  "Lucas",
  "Nancy",
  "Jonathan",
  "Karen",
  "Martin",
  "Will",
  "Steve",
  "Max",
  "Billy",
  "Bob",
  "Sam",
  "Robin",
  "Ted",
  "Calvinl",
  "Lonnie",
  "Barb",
  "Phil",
  "Demogorgon",
  "Connie",
  "Scott",
  "James",
  "Holly",
  "Florence",
  "Russell",
  "Donald",
  "Tommy",
  "Carol",
  "Marsha",
  "Terry",
  "Becky",
  "Eight",
  "Claudia",
  "Murray",
  "Erica",
  "Mayor",
  "Bruce",
  "Troy",
  "Heather"
];
var strangerschar=[];
var score = 0;
var chances = 10;
var keypresscapture = [];
var computercapture = [];

// Get the length of the array
var complen = strangers.length;

// Computer to pick random from the array comp
function guess() {
  return strangers[Math.floor(Math.random() * complen)];
}

var character=guess();
// var guessword= document.getElementById("word");
//convert the random word to individual characters
for (var i = 0;i<character.length;i++){
strangerschar.push(character[i].toLowerCase());
}

console.log(character);
console.log(strangerschar);
//get the characters to -
var progressWord = [];
//Capture the keystroke 

for (var j = 0; j < strangerschar.length; j++){
  progressWord[j] = "_"}
  
//output the - to html in the form -----

console.log(progressWord);

document.getElementById("word").innerHTML = progressWord.join(" ");  

 
document.onkeydown = function (event) {
  var userinput = event.key.toLowerCase();
  keypresscapture.push(event.key.toLowerCase());


}