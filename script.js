const cartas = [
    { imagem: "assets/a-estrela.jpg", descricao: "A Estrela", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-forca.jpg", descricao: "A Força", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-imperatriz.jpg", descricao: "A Imperatriz", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"}, 
    { imagem: "assets/a-justica.jpg", descricao: "A Justiça", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-lua.jpg", descricao: "A Lua", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-morte.jpg", descricao: "A Morte", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-roda-da-fortuna.jpg", descricao: "A Roda da Fortuna", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-sacerdotisa.jpg", descricao: "A Sacerdotisa", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-temperanca.jpg", descricao: "A Temperança", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/a-torre.jpg", descricao: "A Torre", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-carro.jpg", descricao: "O Carro", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-diabo.jpg", descricao: "O Diabo", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-enforcado.jpg", descricao: "O Enforcado", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-eremita.jpg", descricao: "O Eremita", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-imperador.jpg", descricao: "O Imperador", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-julgamento.jpg", descricao: "O Julgamento", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-louco.jpg", descricao: "O Louco", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-mago.jpg", descricao: "O Mago", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-mundo.jpg", descricao: "O Mundo", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-papa.jpg", descricao: "O Hierofante", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/o-sol.jpg", descricao: "O Sol", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"},
    { imagem: "assets/os-enamorados.jpg", descricao: "Os Enamorados", descricao2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing"}
];

const cartaImagem = document.getElementById('carta-imagem');
const descriçãoCarta = document.getElementById('descrição-carta');
const sortearBtn = document.getElementById('sortear-btn');
const embaralharBtn = document.getElementById('embaralhar-btn');
const descricao2 = document.getElementById('descrição-extra');
const cliqueP = document.getElementById('clique');
const cartaContainer = document.getElementById('carta-container');
const icone = document.getElementById('coração');

let loopInterval;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// função p embaralhar as cartas
async function startLoop() {
    if (loopInterval) {
        clearInterval(loopInterval);
        loopInterval = null;
    }

    cliqueP.style.display = 'none';
    icone.style.display = 'none'
    cartaContainer.style.display = 'flex';

    let index = 0;
    loopInterval = setInterval(() => {
        const carta = cartas[index];
        cartaImagem.src = carta.imagem;
        cartaImagem.style.display = 'block';
        descriçãoCarta.textContent = carta.descricao;

        index = (index + 1) % cartas.length; 
    }, 100);
}

// Function to stop the loop and choose a random card
function stopLoopAndChoose() {
    if (loopInterval) {
        clearInterval(loopInterval);
        loopInterval = null;
    }


    cliqueP.style.display = 'none';
    icone.style.display = 'none';
    cartaContainer.style.display = 'flex';

    const cartaSorteada = cartas[Math.floor(Math.random() * cartas.length)];
    cartaImagem.src = cartaSorteada.imagem;
    cartaImagem.style.display = 'block';
    descriçãoCarta.textContent = cartaSorteada.descricao;
    descriçãoCarta.style.display = "block";
    descricao2.textContent = cartaSorteada.descricao2;
    descricao2.style.display = 'block';
}

// Button to start looping through cards
embaralharBtn.addEventListener("click", startLoop);

// Button to stop looping and pick a random card
sortearBtn.addEventListener("click", stopLoopAndChoose);
