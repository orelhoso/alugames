let quantidadeAlugados = document.querySelectorAll('.dashboard__item__button--return').length; //conta quantos jogos estão alugados

function alterarStatus(id) {

    let idDoJogo = `game-${id}`;
    let jogo = document.getElementById(idDoJogo);
    let nomeJogo = jogo.querySelector('p').textContent
    let botao = jogo.querySelector('a');
    let imagem = jogo.querySelector('div');

    if (botao.textContent == 'Alugar') {

        quantidadeAlugados++;

        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');

    } else {

        confirmar = confirm(`Tem certeza que deseja devolver o jogo ${nomeJogo}?`);
        if (confirmar) {

            quantidadeAlugados--;

            botao.textContent = 'Alugar';
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
        }
    }
    
    console.log(`Quantidade de jogos alugada atualmente: ${quantidadeAlugados}`)
}