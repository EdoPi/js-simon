/*
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/


function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

function isValid (inputNum) {
  if (inputNum === isNaN) {
    return false
  }
  if (inputNum < 0 || inputNum > 100) {
    return false
  }
  return true
}


var numComputer = [];
var inputUser;
var winningNum = []

for (var i = 0; i < 5; i++) {
   numComputer.push(randomNumber(1, 100));
}
console.log(numComputer);
alert('I numeri generati dal computer sono: \n' + numComputer)


setTimeout(function(){
  for (var i = 0; i < numComputer.length; i++) {
    console.log(numComputer[i]);
    inputUser = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
    if (inputUser === numComputer[i]) {
      winningNum.push(inputUser)
    }
  }
  console.log(winningNum);
  if (winningNum.length <= 0) {
    alert('hai perso! non hai indovinato nessu numero')
  }
  if (winningNum.length > 0 ) {
    alert('la quantità di numeri che ti sei ricordato è ' + winningNum.length);
    alert('i numeri che ti sei ricordato sono:\n ' + winningNum )
  }

},2000)
