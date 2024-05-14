// Descrizione:
// Abbiamo un frigorifero pieno di frutta: 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 
// 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?

// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"



// creo l'array di frutta nel frigo
const fruttaFrigo = [ 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

//aggiungo la pesca nell'array con .push

const fruttaTavolo = fruttaFrigo.push('pesca');

//stampo per verificare

console.log(fruttaFrigo);


// creo una costante con valore false
//creo un ciclo for per controllare se tra gli elementi c'è il cocomero
//al suo interno metto la condizione if in base al risultato


let fruttaPerCocktail = false;

for ( i=0 ; i < fruttaFrigo.lenght ; i++) {
    if (fruttaFrigo[i] = 'cocomero'){
        fruttaPerCocktail = true;
    } else {
        fruttaPerCocktail = false;
    }
}

//stampo il risultato in console in base alla ricerca del ciclo for

if (fruttaPerCocktail = true) {
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
}