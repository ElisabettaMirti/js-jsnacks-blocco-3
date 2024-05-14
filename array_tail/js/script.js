// La coda dell'Array
// Cartella: array_tail

// Creiamo  un array chiedendo all'utente quanti elementi dovrà contenere e
// generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array

// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente  conviene controllare che il numero di elementi della coda non sia più grande del numero di
//  elementi totali dell'array


//creo un prompt che chiede un numero N all'utente (almeno 5)
//creo un array che abbia N elementi
    //questi elementi devono essere numeri casuali da 1 a 100


let userNumber = Number.parseInt(prompt('Inserisci un numero di elementi per la lista'), 10)

if (userNumber < 5) {
    console.log('Numero troppo basso, facciamo 7')
}
userNumber = 7;

const randomNumbers = []

for(let i= 0; i < userNumber; i++){
    randomNumbers.push(Math.floor(Math.random() * 100 + 1));
}

console.log(randomNumbers);

//stampo in console gli ultimi cinque elementi dell'array

let lastFive = randomNumbers.slice(Math.max(randomNumbers.length - 5, 0));

console.log(lastFive);