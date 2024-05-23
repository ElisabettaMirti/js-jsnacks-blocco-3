// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const Automobili = [
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrico'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrico'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'elettrico'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    }
];


const aBenzina = Automobili.filter((auto) => {
    if (auto.alimentazione === "benzina"){
        return true;
    }
});

console.log(aBenzina);