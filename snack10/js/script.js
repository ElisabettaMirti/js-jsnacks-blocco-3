// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const arrayA = [1, 2, 3, 4];
const arrayB = [5, 6, 7, 8, 9, 10, 11, 12];

let arrayLungo;
let arrayCorto;

if (arrayA.lenght > arrayB.lenght) {
    arrayLungo = arrayA;
    arrayCorto = arrayB;
} else if (arrayA.lenght < arrayB.lenght) {
    arrayLungo = arrayB;
    arrayCorto = arrayA;
} else {
    console.log('Hanno la stessa lunghezza')
}

console.log(arrayLungo, arrayCorto);

while (arrayCorto.lenght = arrayLungo.lenght) {
    arrayCorto.push(Math.floor(Math.random() * 100)+ 1);
}

console.log(arrayLungo, arrayCorto);