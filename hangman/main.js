$(document).ready(() => {
  const mysteryWord = "STRANGER";
  const letterTag = "td";
  let turn = 1;
  let correctCount = 0;
  const MAX_TRIES = 6;
  const victorySound = document.getElementById("victory");
  const failSound = document.getElementById("fail");


  document.querySelectorAll("#keyboard td").forEach((element) => {
    element.addEventListener("click", alphabetClick);
  });

  const mysteryWordElement = document.querySelector("#mysteryWord tr");
  for (let i = 0; i < mysteryWord.length; i++) {
    mysteryWordElement.appendChild(document.createElement(letterTag));
  }

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", `./images/${turn}.jpg`);
  document.querySelector("#Hangman").appendChild(imageElement);

  function showTheLetters(letter) {
    let index = mysteryWord.indexOf(letter);
    while (index > -1) {
      correctCount += 1;
      mysteryWordElement.children[index].innerText = letter;
      index = mysteryWord.indexOf(letter, index + 1);
    }
  }

  function showTheHangman(imageNumber) {
    imageElement.setAttribute("src", `./images/${imageNumber}.jpg`);
  }

  function alphabetClick(event) {
    const letterElement = event.target;
    if (letterElement.classList.contains("selected-letter")) {
    } else {
      letterElement.classList.add("selected-letter");
      const letter = letterElement.innerText;
      mysteryWord.includes(letter)
        ? showTheLetters(letter)
        : showTheHangman(++turn);
    }
    if (correctCount == mysteryWord.length) {
      setTimeout(() => {
        victorySound.play();
        setTimeout(() => {
          alert("Congratulations! You win!");
        }, 2000);
      }, 1000);
    }

    if (turn > MAX_TRIES) {
      setTimeout(() => {
        failSound.play();
        setTimeout(() => {
          alert("Better luck next time...");
        }, 1000);
      }, 300);
    }
  }
});
