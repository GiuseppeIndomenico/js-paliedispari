
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due nmeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//prendiamo i vari dati da html

const selectChoice = document.querySelector('select');
const btnPlay = document.getElementById('play');
const winner = document.getElementById('result');
//creiamo l'evento
btnPlay.addEventListener('click', game);

function game() {
  //prendiamo i dati scelti dal giocatore
  let playerNumChoice = document.getElementById('numPl').value;
  let choicePlayer = selectChoice.value;
  let numAI = Math.floor((Math.random() * 5) + 1);
  //sommiamo i due numeri e capiamo se sono pani o dispari;
  // console.log(playerNumChoice, choicePlayer, numAI)
  let resultGame = numAI + parseInt(playerNumChoice)
  let oddEven = resultGame % 2
  //fatto questo creiamo le condizioni per dichiarare un vincitore
  if (oddEven === 0) {
    oddEven = 'pari'
  } else {
    oddEven = 'dispari'
  }

  //console.log(oddEven);

  if (oddEven === choicePlayer) {

    winner.innerHTML = `
       

     <div class="odd-card card text-dark text-center">

        <div class="card-header ">
            <h4>
                Il vincitore è:
            </h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col 6">
                    <h3>Scelta giocatore:</h3>
                    <h2>${playerNumChoice}</h2>
                </div>
                <div class="col 6">
                    <h3>Scelta Computer:</h3>
                    <h2>${numAI} </h2>
                </div>
            </div>

            <div class="card-footer text-uppercase">
                <h3>vince il Giocatore! </h3>
            </div>

        </div>

      </div>
          
        `


  } else {

    winner.innerHTML = `
       

    <div class="odd-card card text-dark text-center">

       <div class="card-header ">
           <h4>
               Il vincitore è:
           </h4>
       </div>
       <div class="card-body">
           <div class="row">
               <div class="col 6">
                   <h3>Scelta giocatore:</h3>
                   <h2>${playerNumChoice}</h2>
               </div>
               <div class="col 6">
                   <h3>Scelta Computer:</h3>
                   <h2>${numAI} </h2>
               </div>
           </div>

           <div class="card-footer text-uppercase">
               <h3>vince l'automa! </h3>
           </div>

       </div>

     </div>
         
       `



  }







}