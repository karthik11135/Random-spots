"use strict";

const spot = document.querySelector(".spot");
const spotsContainer = document.querySelector(".spots-container");
const scoreEl = document.querySelector(".score");
const scoreCard = document.querySelector(".score-card");
const overlay = document.querySelector(".overlay");
const accuracyEl = document.querySelector(".accuracy");

const randomNumGenerator = function (num) {
  const randomNum = Math.trunc(Math.random() * num) + 1;
  return randomNum;
};

let score = 0;
const spotContainerHandler = function (e) {
  const clickedCorrectly = e.target.classList.contains("spot");
  if (clickedCorrectly) {
    score++;
    const randomHeight = parseInt(getComputedStyle(spotsContainer).height, 10);
    const randomWidth = parseInt(getComputedStyle(spotsContainer).width, 10);
    spot.style.top = `${randomNumGenerator(randomHeight) + 20}px`;
    spot.style.left = `${randomNumGenerator(randomWidth) + 20}px`;
  } else {
    scoreEl.textContent = score;
    const accuracy = score / (score + 1);
    accuracyEl.textContent = accuracy.toFixed(2);
    scoreCard.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};
spotsContainer.addEventListener("click", spotContainerHandler);

overlay.addEventListener("click", function () {
  scoreCard.classList.add("hidden");
  overlay.classList.add("hidden");
  score = 0;
  spotsContainer.removeEventListener("click", spotContainerHandler);
});
