const cartas = [
    { imagem: "assets/a-estrela.jpg", descricao: "A Estrela"},
    { imagem: "assets/a-forca.jpg", descricao: "A Força"},
    { imagem: "assets/a-imperatriz.jpg", descricao: "A Imperatriz"}, 
    { imagem: "assets/a-justica.jpg", descricao: "A Justiça"},
    { imagem: "assets/a-lua.jpg", descricao: "A Lua"},
    { imagem: "assets/a-morte.jpg", descricao: "A Morte"},
    { imagem: "assets/a-roda-da-fortuna.jpg", descricao: "A Roda da Fortuna"},
    { imagem: "assets/a-sacerdotisa.jpg", descricao: "A Sacerdotisa"},
    { imagem: "assets/a-temperanca.jpg", descricao: "A Temperança"},
    { imagem: "assets/a-torre.jpg", descricao: "A Torre"},
    { imagem: "assets/o-carro.jpg", descricao: "O Carro"},
    { imagem: "assets/o-diabo.jpg", descricao: "O Diabo"},
    { imagem: "assets/o-enforcado.jpg", descricao: "O Enforcado"},
    { imagem: "assets/o-eremita.jpg", descricao: "O Eremita"},
    { imagem: "assets/o-imperador.jpg", descricao: "O Imperador"},
    { imagem: "assets/o-julgamento.jpg", descricao: "O Julgamento"},
    { imagem: "assets/o-louco.jpg", descricao: "O Louco"},
    { imagem: "assets/o-mago.jpg", descricao: "O Mago"},
    { imagem: "assets/o-mundo.jpg", descricao: "O Mundo"},
    { imagem: "assets/o-papa.jpg", descricao: "O Papa"},
    { imagem: "assets/o-sol.jpg", descricao: "O Sol"},
    { imagem: "assets/os-enamorados.jpg", descricao: "Os Enamorados"}
];

const animacaoContainer = document.getElementById('animação-container');
const cartaImagem = document.getElementById('carta-imagem');
const descriçãoCarta = document.getElementById('descrição-carta');
const sortearBtn = document.getElementById('sortear-btn');
const embaralharBtn = document.getElementById('embaralhar-btn');

function iniciarAnimação() {
    animacaoContainer.style.display = 'block';
    const cartasAnimadas = document.querySelectorAll('.carta-animada');
    cartasAnimadas.forEach(carta => carta.style.animationPlayState = 'running');
}

function pararAnimação() {
    const cartasAnimadas = document.querySelectorAll('.carta-animada');
    cartasAnimadas.forEach(carta => carta.style.animationPlayState = 'paused');
    animacaoContainer.style.display = 'none';
}

embaralharBtn.addEventListener('click', function() {
    iniciarAnimação();
    setTimeout(() => {
        pararAnimação()
    }, 1500);
})

sortearBtn.addEventListener("click", function() {
    const cartaSorteada = cartas[Math.floor(Math.random() * cartas.length)];
    cartaImagem.src = cartaSorteada.imagem;
    cartaImagem.style.display = 'block';
    descriçãoCarta.textContent = cartaSorteada.descricao;
})