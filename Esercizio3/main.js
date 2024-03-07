//Dichiarazione e inizializzazione variabili
const nCats = 44;
const nCatsInRow = 6;
let nRows;
let nFreeCats;
let catsToCompleteRow;
let nRowComplete;

//Programma
nRows = (nCats / nCatsInRow);
nFreeCats = (nCats % nCatsInRow);
catsToCompleteRow = (nCatsInRow - nFreeCats);

nRowComplete = (nCats - nFreeCats) / nCatsInRow;

console.log("n. Righe: " + nRows);
console.log("n. Gatti liberi: " + nFreeCats);
console.log("Ci sono " + nRowComplete + " file di gatti e ne mancano " + catsToCompleteRow + " per completare una nuova fila, con un avanzo di 2”");
