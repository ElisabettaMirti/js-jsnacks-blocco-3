// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.


const oddArray = [];

let userNumber = '';

while (oddArray.lenght = 5) {
    userNumber = Number.parseInt(prompt('Type a number'));
    if (userNumber % 2 === 1) {
        oddArray.push(userNumber);
    }

    oddArray.lenght < 6
}

console.log(oddArray);