var comp = ["a", "b", "c", "d", "e", "f", "g", "h"];
var score = 0;
var chances = 4;
// Get the length of the array
var complen = comp.length;

// COmputer to pick random from the array comp

var computerguess = comp[Math.floor(Math.random() * complen)];

// Get the lenth of the array
var complen = comp.length;



//Capture the keystroke
for (j = chances; j > 0; j--) {

  for (var i = 0; i < complen; i++) {
    document.onkeydown = function (event) {
      var userinput = event.key.toLowerCase();
      console.log(computerguess);
      console.log(score);
      console.log(userinput);

      if (userinput === computerguess) {
        
        document.getElementById("score").innerHTML = "Score is: " + score;
        alert("Congratulations");
        score++;
      } 
      else if (chances > 0) {

        alert("wrong. Try again");
        chances--;
        document.getElementById("chances left").innerHTML = "Chances left " + chances;
      } 
      else {
        document.write(" game over");
      }
    }
  }
}