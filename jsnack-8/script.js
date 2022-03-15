/**
 *
 *
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 *
 */

const alphabet = ['a', 'b', 'c', 'd', 'e'];
const num = [1, 2, 3, 4, 5];

function unification(array1, array2) {
    const minLength = Math.min(array1.length, array2.length);
    const coupledArrey = [];
    for (let i = 0; i <= minLength; i++){
        coupledArrey.push(array1[i], array2[i]);
    }
    return coupledArrey;
}

console.log(alphabet, num);
console.log(unification(alphabet, num));



