/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
// console.log(word);

// Dichiara la funzione qui.
function getVocali(word) {

    // Creo un nuovo array
    const vocali = ["a", "e", "i", "o", "u"];
    let numeroVocali = 0

    // Ciclo l'array
    for (let i = 0; i < vocali.length; i++) {
        const letter = vocali[i];
        // console.log(letter);
        if (word.includes(letter)) {
            numeroVocali++;
        }
    }
    return numeroVocali + 1;
}

// Invoca la funzione qui e stampa il risultato in console

const contaVocali = getVocali(word);
console.log(contaVocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)