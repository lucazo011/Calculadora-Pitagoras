const anterior = document.getElementById('anterior')
const proximo = document.getElementById('proximo')

let corpoAtual = 1;

function mostrarCorpo(corpo) {
    for (let i = 1; i <= 3; i++) {
    document.getElementById(`corpo${i}`).style.display = 'none';
    }
    document.getElementById(`corpo${corpo}`).style.display = 'flex';
    }

function mostrarCorpoAnterior() {
    corpoAtual = (corpoAtual - 1 < 1) ? 3 : corpoAtual - 1;
    mostrarCorpo(corpoAtual);
    }

function mostrarProximoCorpo() {
    corpoAtual = (corpoAtual + 1 > 3) ? 1 : corpoAtual + 1;
    mostrarCorpo(corpoAtual);
    }

proximo.addEventListener("click", mostrarProximoCorpo)
anterior.addEventListener("click", mostrarCorpoAnterior)

mostrarCorpo(corpoAtual);




function updateBrVisibility() {
    const brTag = document.querySelector('br');
    
    if (window.innerWidth <= 600) {
        // Se a largura da tela for menor ou igual a 600px, oculta a tag <br>
        brTag.style.display = 'none';
    } else {
        // Se a largura da tela for maior que 600px, exibe a tag <br>
        brTag.style.display = 'block';
    }
}

// Adiciona um listener para atualizar a visibilidade quando a largura da tela muda
window.addEventListener('resize', updateBrVisibility);

// Chama a função para configurar a visibilidade inicialmente
updateBrVisibility();