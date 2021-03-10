// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//Variabili Array Simon
var arraySimon = [];
var arraySimonLength = 5;

//Variabili Array Utente
var arrayUtente = [];

//Variabile Array di confronto
var arrayDiConfronto = [];


//Variabili numeri casuali
var max = 100;
var min = 0;

$(document).ready(function() {

  //Inserisco valori non doppi nell'array
  while (arraySimon.length < arraySimonLength) {
    var numeroGenerato = getRndInteger(min, max);
      if ( !arraySimon.includes( numeroGenerato) ) {
      arraySimon.push(numeroGenerato);
    }
  }

  // console.log(arraySimon);

  //Stampare Array
  alert("Memorizza i seguenti numeri: " + arraySimon);
  alert("Attendi 30 secondi");

  //Fai passare 30 secondi
  setTimeout(function () {

    alert("Inserisci i numeri che hai memorizzato");

    //L'utente inserisce i numeri
    while (arrayUtente.length < arraySimonLength) {
      var numeroUtente = parseInt(prompt("Inserisci in fila un numero alla volta"));

      if (!arrayUtente.includes(numeroUtente)) {
        arrayUtente.push(numeroUtente);
      }
      else {
        alert("Hai già inserito questo numero!");
      }
    }

    // console.log(arrayUtente);

    //Controllo i due 
    for (var i = 0; i < arrayUtente.length; i++) {
      if (arraySimon.includes(arrayUtente[i])) {
        arrayDiConfronto.push(arrayUtente[i]);
      }
    }

    alert("Hai ricordato " + arrayDiConfronto.length + " numeri : " + arrayDiConfronto);
    
    // console.log(arrayDiConfronto);
  }, 5000);

});

// Funzione creazione numeri Random
function getRndInteger(min,max) {
  return Math.floor(Math.random() * (max -min +1) ) + min;
}