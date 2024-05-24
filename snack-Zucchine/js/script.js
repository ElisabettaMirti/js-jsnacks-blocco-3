// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const listaZucchine = [
    {
        varieta: "romana",
        peso: 1,
        lunghezza: 6 
    },
    {
        varieta: "lombarda",
        peso: 0.5,
        lunghezza: 4 
    },
    {
        varieta: "campana",
        peso: 1.2,
        lunghezza: 6 
    },
    {
        varieta: "pugliese",
        peso: 0.7,
        lunghezza: 5 
    },
    {
        varieta: "siciliana",
        peso: 1.5,
        lunghezza: 8 
    },
    {
        varieta: "veneta",
        peso: 1.7,
        lunghezza: 8 
    },
    {
        varieta: "aretina",
        peso: 0.9,
        lunghezza: 7 
    },
    {
        varieta: "umbra",
        peso: 0.5,
        lunghezza: 4 
    },
    {
        varieta: "marchigiana",
        peso: 1.1,
        lunghezza: 6 
    },
    {
        varieta: "abbruzzese",
        peso: 1.3,
        lunghezza: 8 
    }
];


let sommaTotale = 0;

listaZucchine.filter((zucchina) => {
    sommaTotale += zucchina.peso;
    return sommaTotale;
})

console.log(sommaTotale);

let sommaMaggioriOtto = 0;
let sommaMinoriOtto = 0;

listaZucchine.filter((zucchina) => {
    if (zucchina.lunghezza >= 8){
        sommaMaggioriOtto += zucchina.peso;
    } else {
        sommaMinoriOtto += zucchina.peso;
    }
});

console.log(sommaMaggioriOtto, sommaMinoriOtto);