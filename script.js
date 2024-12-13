const funFactAboutMe = [
  "I love reading",
  "I love deep fried rice",
  "I want to try raw marinated crabs"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateFact() {
  const elem = document.getElementById("fact-target");
  const randomIndex = getRandomInt(funFactAboutMe.length);
  elem.innerText = funFactAboutMe[randomIndex];
}

updateFact();
