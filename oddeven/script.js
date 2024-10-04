// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per 
// il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o 
// dispari (usando una funzione) Dichiariamo chi ha vinto.

function somma(num1, num2) {
    let result = num1 + num2;
    return result
}

let playAgain = true;

while (playAgain == true) {
    let disparipari = prompt(`Type "pari" or "dispari`);
    let num1;
    let num2;
    let dispari = false;
    let pari = false;

    while (disparipari !== "dispari" && disparipari !== "pari") {
        alert("Hai inserito un valore non corretto, riprova.");
        disparipari = prompt(`Type "pari" or "dispari"`);
    }

    num1 = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(num1);


    while (isNaN(num1) || num1 > 5 || num1 < 1) {
        alert("Hai inserito un numero non valido. Devi inserire un numero da 1 a 5.");
        num1 = parseInt(prompt("Inserisci un numero da 1 a 5"));
    }

    num2 = Math.floor(Math.random() * 5) + 1;
    console.log(`user : ${num1}`);
    console.log(`pc : ${num2}`);

    alert(`Hai scelto ${num1} e che la somma sarà ${disparipari}`);
    alert(`Il computer ha scelto ${num2}`)

    if (somma % 2 === 0) {
        pari = true;
    } else {
        dispari = true
    }

    if (disparipari === "dispari") {
        if (dispari == true) {
            alert("Hai vinto congratulazioni!")
        } else {
            alert("Mi dispiace, hai perso!")
        }
    }

    if (disparipari === "pari") {
        if (dispari == true) {
            alert("Mi dispiace, hai perso!")
        } else {
            alert("Hai vinto congratulazioni!")
        }
    }
    playAgain = confirm("Vuoi giocare ancora?")
}

alert("Grazie e alla prossima")




