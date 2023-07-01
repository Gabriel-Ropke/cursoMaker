const pista = document.getElementById("pista");
const globo = document.getElementById("globo");
for (let quadrados = 0; quadrados < 24; quadrados++) {
  let newLi = document.createElement("li");
  newLi.classList.add("quadradoDaPista");
  pista.appendChild(newLi);
}
for (let quadrados = 0; quadrados < 25; quadrados++) {
  let newLi = document.createElement("li");
  globo.appendChild(newLi);
}
let quadradoDaPista = document.querySelectorAll("#pista li.quadradoDaPista");
let quadradoDoGlobo = document.querySelectorAll("#globo li");
const pistaCores = [
  "roxo",
  "rosa",
  "vermelho",
  "azul",
  "verde",
  "laranja",
  "amarelo",
];
const globoCores = ["color1", "color2", "color3", "color4"];
quadradoDoGlobo.forEach((e) => {
  let corAtual = Math.floor(Math.random() * 4);
  e.style.background = `var(--${globoCores[corAtual]})`;
});
quadradoDaPista.forEach((e) => {
  let corAtual = Math.floor(Math.random() * 7);
  e.style.background = `var(--${pistaCores[corAtual]})`;
});
setInterval(() => {
  quadradoDoGlobo.forEach((e) => {
    let corAtual = Math.floor(Math.random() * 4);
    e.style.background = `var(--${globoCores[corAtual]})`;
  });
}, 1000);
setInterval(() => {
  quadradoDaPista.forEach((e) => {
    let corAtual = Math.floor(Math.random() * 7);
    e.style.background = `var(--${pistaCores[corAtual]})`;
  });
}, 1500);
