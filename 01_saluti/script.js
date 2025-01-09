/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function getCiao(saluto) {
//     return saluto + ' ' + userName;
// }

// ARROW FUNCTION

const getCiao = saluto => saluto + ' ' + userName;

// Invoca la funzione qui e stampa il risultato in console

console.log(getCiao('ciao'));

//Risultato atteso se si passa 'Mario': // ciao Mario
