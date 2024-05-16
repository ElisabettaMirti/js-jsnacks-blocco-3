// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function wordLenght (wordA, wordB) {
    if (wordA.length > wordB.length) {
        return wordA;
    } else if (wordB.length > wordA.length) {
        return wordB;
    } else {
        return wordA, wordB;
    }
}