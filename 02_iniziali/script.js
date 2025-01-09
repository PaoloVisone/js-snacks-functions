/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

function getFirstLetter(names) {

    // Creo un array
    const firstLetter = []

    // Ciclo l'array
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i]);

        // Seleziono i nomi dell'array
        const nome = names[i];

        // console.log(nome[0]);

        // Seleziono solo la prima lettera in posizione [0]
        const letter = nome[0];

        // Push delle lettere nell'nuovo array
        firstLetter.push(letter);
    }
    console.log(firstLetter);

    // Fine ciclo 
    return firstLetter;
}

// Invoca la funzione qui e stampa il risultato in console

// console.log(getFirstLetter(names));
const firstLetter = getFirstLetter(names);
console.log(firstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]