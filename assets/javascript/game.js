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

//convert the random word to individual characters
for (var i=0;i<character.length;i++){
strangerschar.push(character[i]);
}

console.log(character);
console.log(strangerschar);
document.onkeydown = function (event) {
  var userinput = event.key.toLowerCase();
  keypresscapture.push(event.key.toLowerCase());
}
