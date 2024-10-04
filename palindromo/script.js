// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let parola;

function palindromo(parola) {
    parola = prompt("inserisci qui la tua parola");
    console.log(parola);
    return parola.split('').reverse().join('');
}
let parolaReverse = palindromo()
console.log(parolaReverse);




