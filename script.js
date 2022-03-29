"use strict";

//selecting elements

const p1score = document.querySelector("#score--0");
const p0score = document.querySelector("#score--1");
const p0player = document.querySelector(".player--0");
const p1player = document.querySelector(".player--1");
const diceImg = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const p0currentScoreE = document.querySelector("#current--0");
const p1currentScoreE = document.querySelector("#current--1");
let activeplayer = 0;

//at initial
onload();
function onload() {
  p1score.textContent = 0;
  p0score.textContent = 0;
  diceImg.classList.add("hidden");
  p0currentScoreE.textContent = 0;
  p1currentScoreE.textContent = 0;
}

//clicking rollDice button

btnRoll.addEventListener("click", () => {
  //genertate random number
  const rolledNo = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNo);

  //check if 1

  if (rolledNo === 1) {
    p0player.classList.toggle("player--active");
    p1player.classList.toggle("player--active");

    document.querySelector(`#score--${activeplayer}`).textContent =
      Number(document.querySelector(`#score--${activeplayer}`).textContent) +
      Number(document.querySelector(`#current--${activeplayer}`).textContent) +
      1;
    if (
      Number(document.querySelector(`#score--${activeplayer}`).textContent) >=
      100
    ) {
      alert(`player ${activeplayer + 1} wins`);
      document.querySelector(".btn--new").click();
    }
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
  } else {
    document.querySelector(`#current--${activeplayer}`).textContent =
      Number(document.querySelector(`#current--${activeplayer}`).textContent) +
      rolledNo;
  }

  //display dice images
  diceImg.src = `https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/07-Pig-Game/final/dice-${rolledNo}.png`;
  diceImg.classList.remove("hidden");
});

//newGame Button
document.querySelector(".btn--new").addEventListener("click", () => {
  onload();
});
