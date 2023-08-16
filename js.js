// A project by Shahash Shahi using HTML, CSS and JavaScript.

document.querySelector("h1").textContent = "By Kshitij Adhikari";
document.querySelector(".between").textContent =
  "(Guess the number between 1 and 20!)";
document.querySelector(".again").textContent = "Again!";
document.querySelector(".number").textContent = "?";
document.querySelector(".check").textContent = "Check!";
document.querySelector(".message").textContent = "Start guessing number---";
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔No number----Enter number between 1 - 20";
  } else if (guess === randomNumber) {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".message").textContent =
      "🎉Congratulations you guessed the correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📈Too high-- try guessing lower number.";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭 You lost the game---";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "📉Too low-- try guessing higher number.";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭You lost the game---";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
});
