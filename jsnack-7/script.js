/**
 *
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    *
 */


function reverseString(str) {
        return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

    function oppositeNumber(number) {
    return -number;
}

console.log(oppositeNumber("-10"));

const list = [
    'ciao',
    'miao',
    'world',
    'pippo',
    1,
    2,
    3,
    4,
    5,
]

const newList = list.map((element) => (isNaN(parseInt(element))) ? reverseString(element) : oppositeNumber(element));

console.table(newList)

