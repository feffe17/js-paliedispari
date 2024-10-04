// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


function palindromo(parola) {
    return parola.split('').reverse().join('');
}

let parola;
parola = prompt("inserisci qui la tua parola");
console.log(parola);

let parolaReverse = palindromo(parola);
console.log(parolaReverse);

if(parola == parolaReverse){
    alert(`${parola} è un palindromo`);
} else {
    alert(`${parola} non è un palindromo`);
}




