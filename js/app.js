function alterarStatus(id) {
    let idDoJogo = `game-${id}`;
    let jogo = document.getElementById(idDoJogo);
    let botao = jogo.querySelector('a');
    let imagem = jogo.querySelector('div');

    if (botao.textContent == 'Alugar') {
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        
    } else {
        botao.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
    }
}