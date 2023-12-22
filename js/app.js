let rented = 0;

function updateRentered(){
    rented = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`À quantiadade total de jogos alugados é igual a ${rentedCount}`);
} 


function alterarStatus(id) {
    let click = document.getElementById(`game-${id}`);
    let blur = click.querySelector(`.dashboard__item__img`);
    let bot = click.querySelector(`.dashboard__item__button`);
    let nome = click.querySelector(`.dashboard__item__name`);
    
    
    if(blur.classList.contains('dashboard__item__img--rented')){
        blur.classList.remove('dashboard__item__img--rented');
        bot.textContent = 'Alugar';
        bot.classList.remove('dashboard__item__button--return');
        alert("Você devolveu " + nome.textContent);
    } else {
        blur.classList.add('dashboard__item__img--rented');
        bot.textContent = 'Devolver';
        bot.classList.add('dashboard__item__button--return');
        alert("Você reservou " + nome.textContent);
    }
    updateRentered();
}
updateRentered();

