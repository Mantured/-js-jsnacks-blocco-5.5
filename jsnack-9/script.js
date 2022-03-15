/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const array = [
    'Un',
    'Anello',
    'per',
    'domarli',
    'Uno',
    'per',
    'trovarli',
    'Uno',
    'per',
    'ghermirli ',
    'e',
    'al',
    'buio',
    'incatenarli',
    'Nella',
    'Terra',
    'di',
    'Mordor',
    'dove',
    "l'Ombra",
    'cupa',
    'scende'
];

const aNum = randomInt(0, (array.length -1));
const bNum = randomInt(0, (aNum -1));

function randomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}


function splitterCell(array, numA, numB) {
    if (numA >= array.length || numB >= array.length) {
        console.alert('Alcuni valori inseriti superano il valore limite consentito')
        return false;
    } else {
        const newArray = [];
        for (let i = numB; i <= numA; i++){
            newArray.push(array[i]);
        }
        return newArray;
    }
}

console.table(array);
console.log(aNum, bNum);
console.table(splitterCell(array, aNum, bNum));