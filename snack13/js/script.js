// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321


function reverseNumber(anyNumber) {
    const stringa = anyNumber.toString();
    let reversed = anyNumber + '';

    for (let i = anyNumber.length; i > 0 ; i = i - 1){
    reversed += stringa[i];
    
    }
    return reversed;
}

// NON SI PUò FARE SE NON LO TRASFORMIAMO IN STRINGA
