
/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */

const pickles = [
    {
        variety: 'Nera',
        length: '10',
        weight: '152',
    },
    {
        variety: 'Romanesco',
        length: '15',
        weight: '350',
    },
    {
        variety: 'Fiorentino',
        length: '8',
        weight: '220',
    },
    {
        variety: 'Tonde',
        length: '10',
        weight: '320',
    },
    {
        variety: 'Trombetta',
        length: '7',
        weight: '500',
    },
    {
        variety: 'Napoletana',
        length: '11',
        weight: '600',
    }
];

let sum = 0;
let shortSum = 0;
let longSum = 0;

pickles.forEach(element => {
    sum += parseInt(element.weight);
    });

console.table(`${sum}g`);


longPickles = [];
shortPickles = [];

pickles.filter((element) => {
    (parseInt(element.length) >= 15) ? (longPickles.push(element), longSum = parseInt(element.weight) + longSum) : (shortPickles.push(element), shortSum = parseInt(element.weight) + shortSum);
})

console.table(longPickles);
console.table(shortPickles);



/* shortPickles.forEach(element => {
    shortSum = parseInt(element.weight) + shortSum;
});
longPickles.forEach(element => {
    longSum = parseInt(element.weight) + longSum;
}); */


console.log(`le zucchine lunghe pesano ${longSum}g`);
console.log(`le zucchine corte pesano ${shortSum}g`);
