// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, 
//una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: "Giordana",
        cognome: "Giordani",
        eta: 12
    },
    {
        nome: "Davida",
        cognome: "Davidelli",
        eta: 25
    },
    {
        nome: "Mirka",
        cognome: "Mirketti",
        eta: 28
    },
    {
        nome: "Riccarda",
        cognome: "Riccardini",
        eta: 15
    },
    {
        nome: "Vita",
        cognome: "Viti",
        eta: 29
    },
    {
        nome: "Benedetto",
        cognome: "De Benedittis",
        eta: 23
    },
    {
        nome: "Martino",
        cognome: "Martini",
        eta: 27
    },
    {
        nome: "Marcolina",
        cognome: "Marchetti",
        eta: 24
    },
    {
        nome: "Julia", 
        cognome: "Juliacci",
        eta: 18
    },
    {
        nome: "Mattea",
        cognome: "Matteotti",
        eta: 13
    }
];

const possibiliGuidatori = persone.forEach((element) => {
    if (element.eta >= 18) {
        return console.log('Nome: ' + element.nome + " Cognome: " + element.cognome + " --- Può guidare")
    } else {
        return console.log('Nome: ' + element.nome + " Cognome: " + element.cognome + " --- Non può guidare")
    }
});