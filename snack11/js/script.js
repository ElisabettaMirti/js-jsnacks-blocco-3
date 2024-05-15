// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayX = [];


let somma = 0;

while (somma < 50) {
    let N = Number.parseInt(prompt('Type a number'), 10);

    if (Number.isNaN(N) !== true){
        arrayX.push(N);
    somma += N;
    }
}

console.log(arrayX, somma);