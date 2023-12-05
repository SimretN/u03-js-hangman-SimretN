//Globala variabler
// //creating js alphabets
// const alphabets = document.querySelector(".letterButtons");

// for (let i = 97; i <= 122; i++) {
//   const button = document.createElement("button");
//   console.log(String.fromCharCode(i));
//   button.innerHTML = String.fromCharCode(i);
//   alphabets.appendChild(button);
// }

//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");








let selectedWord; // Sträng: ett av orden valt av en slumpgenerator från arrayen ovan

let guesses = 0; // Number: håller antalet gissningar som gjorts
let hangmanImg; // Sträng: sökväg till bild som kommer visas (och ändras) fel svar. t.ex. `/images/h1.png`

let msgHolderEl; // DOM-n
//const wordList;      // Arrod: Ger meddelande när spelet är över
let startGameBtnEl; // DOM-nod: knappen som du startar spelet med
let letterButtonEls; // Array av DOM-noder: Knapparna för bokstäverna
let letterBoxEls; // Array av DOM-noder: Rutorna där bokstäverna ska stå

//   Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner
//   Funktion som slumpar fram ett ord
//   Funktion som tar fram bokstävernas rutor, antal rutor beror på vilket ord slumptas fram
//   Funktion som körs när du trycker på bokstäverna och gissar bokstav
//   Funktion som ropas vid vinst eller förlust, gör olika saker beroende tillståndet
//   Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är påconst word_el = document.querySelector("#letterBoxes ul");
