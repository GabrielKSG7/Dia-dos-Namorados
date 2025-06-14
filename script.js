// --- LÓGICA DA TELA DE BOAS-VINDAS E PERMISSÃO DE ÁUDIO ---
const startOverlay = document.querySelector('.start-overlay');
const startButton = document.querySelector('#startButton');
const audio = document.querySelector('#musica-fundo');

startButton.addEventListener('click', () => {
    // Toca a música
    audio.play();
    
    // Esconde a tela de boas-vindas com um efeito de fade out
    startOverlay.classList.add('hidden');
});


// --- LÓGICA DO CARROSSEL ---
const slides = document.querySelectorAll('.carrossel-inner img');
const legenda = document.querySelector('.carrossel-legenda'); 
let slideAtual = 0; // Guarda o índice da imagem que está aparecendo

// Função para mostrar um slide específico
function mostrarSlide(index) {
    // Esconde todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostra o slide do índice desejado
    slides[index].classList.add('active');
    
    // ATUALIZA O TEXTO DA LEGENDA COM O 'ALT' DA IMAGEM ATUAL
    legenda.textContent = slides[index].alt; 
}

// Função para avançar ou voltar o slide
function mudarSlide(direcao) {
    // Calcula o próximo índice
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    mostrarSlide(slideAtual);
}

// Inicia o carrossel mostrando a primeira imagem (e a primeira legenda)
mostrarSlide(slideAtual);


// --- LÓGICA DA ANIMAÇÃO DE CORAÇÕES ---
const heartsContainer = document.querySelector('.hearts-container');

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posição inicial aleatória na largura da tela
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Duração da animação aleatória para um efeito mais natural
    heart.style.animationDuration = Math.random() * 5 + 5 + 's'; // Entre 5s e 10s

    heartsContainer.appendChild(heart);

    // Remove o coração da tela depois que a animação termina
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Cria um novo coração a cada 500ms (meio segundo)
setInterval(criarCoracao, 500);