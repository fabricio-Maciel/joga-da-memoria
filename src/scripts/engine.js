const emojis = [
  "👨🏻‍💻",
  "👨🏻‍💻",
  "🐈‍⬛",
  "🐈‍⬛",
  "😍",
  "😍",
  "🎯",
  "🎯",
  "👽",
  "👽",
  "💩",
  "💩",
];

// array que irá armazenar as cartas clicadas
let openCards = [];

// Embaralhando o array com os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Criando as cartas do jogo
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.addEventListener("click", handleClick);
  document.querySelector(".game").appendChild(box);
}

// Função chamada quando uma carta é clicada
function handleClick() {
  if (this.classList.contains("boxMatch")) {
    this.removeEventListener("click", handleClick);
    return;
  }
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }

  console.log(this);
}

// Função que confere se as cartas são iguais
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length == emojis.length) {
    alert("Você Ganhou");
  }
}
