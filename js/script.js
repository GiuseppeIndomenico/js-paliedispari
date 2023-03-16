// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//prendiamo i nostri tasti vari dad html
const userData = document.querySelector('input');
const btnPal = document.getElementById('palPlay');
const palResult = document.getElementById('palResult');
//creiamo il bottone di evento scatenante

btnPal.addEventListener('click', checkPalindrome)

//creiamo una funzione che possa prendere una parola, scomporla ribaltarla e ricomporla e darci un ritorno in caso sia una parola palindroma
function palindrome(word) {

    word = word.toLowerCase().replace(/[^a-z]/g, '');


    return word === word.split('').reverse().join('');

}
//dopodichè aggiungiamo una funzione scatenante  per prendere i valori inseriti dall'utente e fargli scoprirer se la parola è effettivamente palindroma
function checkPalindrome() {
    let userWord = userData.value;
    palindrome(userWord);
    console.log(palindrome(userWord));
    if (palindrome(userWord) === true) {

        palResult.innerHTML = `
        <h1>Complimenti! questa è una parola palindroma!</h1>
        `
    } else {
        palResult.innerHTML = `
        <h1>Questa NON è una parola palindroma, ti sarai sbagliato!</h1>
        `
    }
}
