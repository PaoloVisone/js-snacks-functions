/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

// Elementi 
const saluto1 = 'Buongiorno';
const saluto2 = 'Buon Pomeriggio';
const saluto3 = 'Buonsera';
let today = new Date();
let time = today.getHours();

// time = 18;

// Funzione

function getSaluto(name) {
    if (time < 13) {
        console.log(saluto1 + " " + name);
    } else if (time < 17) {
        console.log(saluto2 + " " + name);
    } else {
        console.log(saluto3 + " " + name);
    }
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getSaluto());

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.