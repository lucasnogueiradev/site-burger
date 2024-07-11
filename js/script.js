// Pegar o elemento pelo id
const bars = document.getElementById("bars");
const nav = document.getElementById("nav");

// Pegar todos os elementos <a> dentro do menu de navegação
const navItems = document.querySelectorAll("a");

// Função para abrir ou fechar o menu
function toggleMenu() {
  nav.classList.toggle("active"); // Adiciona ou remove a classe "active" do elemento nav
  bars.classList.toggle("active"); // Adiciona ou remove a classe "active" do elemento bars
}

// Adiciona um evento de clique no elemento bars para chamar a função toggleMenu
bars.addEventListener("click", toggleMenu);

// Adiciona um evento de clique a cada item do menu de navegação para chamar a função toggleMenu
navItems.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

// Cards
// Pegar o elemento pelo id
const card = document.getElementById("card");
const scrollLeft = document.getElementById("left");
const scrollRight = document.getElementById("right");

// Adiciona um evento de clique ao botão de scroll para a esquerda
scrollLeft.addEventListener("click", () => {
  card.scrollBy({
    left: -200, // Move o elemento card 200 pixels para a esquerda
    behavior: "smooth", // Adiciona um efeito de rolagem suave
  });
  console.log("scrollLeft");
});

// Adiciona um evento de clique ao botão de scroll para a direita
scrollRight.addEventListener("click", () => {
  card.scrollBy({
    left: 200, // Move o elemento card 200 pixels para a direita
    behavior: "smooth", // Adiciona um efeito de rolagem suave
  });
  console.log("scrollRight");
});
