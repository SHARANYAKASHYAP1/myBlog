var y = Math.floor(Math.random() * 10 + 1);
var x = document.getElementById("guessField").value;
if(x == y)
{
    alert("CONGRATULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
       + guess + " GUESS");
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY !! TRY A SMALLER NUMBER");
}
else
{
    guess++;
    alert("OOPS SORRY !! TRY A GRAETER NUMBER")
}
function playAgain(){
    y = Math.floor(Mathh.random() * 10 +1);
}

