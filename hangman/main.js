$(document).ready(() => {
  document.querySelectorAll("#keyboard td").forEach((element) => {
    element.addEventListener("click", alphabetClick);
  });

  function alphabetClick(event) {
    const letterElement = event.target;
    letterElement.classList.add("selected-letter");
  }
});
