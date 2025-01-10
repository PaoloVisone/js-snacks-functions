/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letter = 'A';
// Dichiara la funzione qui.

function getLetterName(names, letter) {
    // Creo un nuovo array
    const namesTwo = [];

    // Ciclo l'array
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i]);

        // selziono i nomi
        const nomi = names[i];
        // console.log(nomi[0]);
        // Seleziono le lettere
        const firstLetter = nomi[0];

        // if statement
        if (firstLetter === letter) {
            // push nel nuovo array
            namesTwo.push(nomi);
        }
    }
    // console.log(namesTwo);
    return namesTwo;
}

// Invoca la funzione qui e stampa il risultato in console

const inizialiFunc = getLetterName(names, letter);
console.log(inizialiFunc);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]