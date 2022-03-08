var clicked = false;
document.querySelector("a").addEventListener("click", () => {
  if (clicked === false) {
    diceRoll();
    clicked = true;
  }
  if (clicked === true) {
    document.querySelector("a").addEventListener("click", restartGame);
  }
});

function diceRoll() {
  const randomNumberOne = Math.floor(Math.random() * 6 + 1);
  const randomNumberTwo = Math.floor(Math.random() * 6 + 1);
  document
    .querySelector(".dice-1")
    .setAttribute("src", "images/dice-" + randomNumberOne + ".png");
  document
    .querySelector(".dice-2")
    .setAttribute("src", "images/dice-" + randomNumberTwo + ".png");

  if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML =
      "Player <span class='middle-word'>one</span> wins!";
  } else if (randomNumberTwo > randomNumberOne) {
    document.querySelector("h1").innerHTML =
      "Player <span class='middle-word'>Two</span> wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  document.querySelector("a").innerText = "Restart!";
}

function restartGame() {
  document.querySelector("h1").innerHTML = "The dice game";
  document.querySelector("a").innerText = "Start!";
  document.querySelector(".dice-1").setAttribute("src", "images/dice-1.png");
  document.querySelector(".dice-2").setAttribute("src", "images/dice-1.png");
  document.querySelector("a").removeEventListener("click", restartGame);
  clicked = false;
}
