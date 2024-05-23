// Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const userTime = Number.parseInt(prompt('Quanti secondi ti servono?'));

setTimeout (timeIsOver, userTime * 1000);


function timeIsOver() {
    alert('Fine tempo!');
}

