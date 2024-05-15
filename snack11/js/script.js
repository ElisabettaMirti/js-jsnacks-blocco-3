// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayX = [];

let N;
let somma = 0;

while (somma >= 50) {
    N = Number.parseInt(prompt('Type a number'));
    arrayX.push(N);
    somma += N;
}