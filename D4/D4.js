/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
 */
const area = function (l1, l2) {
  let area_Rettangolo = l1 * l2;
  return area_Rettangolo;
};
//console.log(area(2, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum = sum * 3;
  }
  return sum;
};
//console.log(crazySum(2, 2));
//console.log(crazySum(12, 5));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n1) {
  let diff = n1 - 19;
  if (n1 > 19) {
    diff *= 3;
  }
  return diff;
};
//console.log(crazyDiff(20));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n1) {
  if (n1 >= 20 && (n1 <= 100) | (n1 === 400)) {
    return true;
  } else {
    return false;
  }
};
//console.log(boundary(401));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  let arr_Str = str.slice(0, 7);
  if (arr_Str.toUpperCase() === "EPICODE") {
    return str;
  } else {
    return "EPICODE " + str;
  }
};
//console.log(epify("Epicode"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n1) {
  if (n1 < 0) {
    console.log("non è un numero positivo, mi spiace");
  } else if (n1 % 3 === 0 && n1 % 7 !== 0) {
    console.log("è un multiplo di 3");
  } else if (n1 % 7 === 0 && n1 % 3 !== 0) {
    console.log("è un multiplo di 7");
  } else if (n1 % 3 === 0 && n1 % 7 === 0) {
    console.log("è sia multiplo di 3 che di 7");
  } else {
    console.log("non è un multiplo ne di 7 ne di 3");
  }
};
//check3and7();

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  let arr_Str = str.split("");
  let str_Rev = arr_Str.reverse();
  let str_Vera = str_Rev.join("");
  return str_Vera;
};
//console.log(reverseString("marco"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst =

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
